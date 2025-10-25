/**
 * Generic options used to insert an item into a tree-like structure.
 */
export interface AddItemOptions<T, K extends keyof T, U> {
  idKey: keyof T;
  childrenKey: K;
  targetId: unknown;
  newItem: U;
  index?: number;
}

export interface MoveItemBetweenGroupsOptions<T, K> {
  idKey: keyof T;
  childrenKey: K;
  sourceId: unknown;
  targetId: unknown;
  fromIndex: number;
  toIndex: number;
}

export interface MoveItemInTreeOptions<T> {
  idKey: keyof T; // e.g. "key" or "id"
  childrenKey: keyof T; // e.g. "fieldGroup" or "nodes"
  targetId: unknown;
  fromIndex: number;
  toIndex: number;
}

/**
 * Inserts a new item into the specified node at a given index.
 *
 * @param node - The node to insert the item into
 * @param options - Configuration options for insertion
 * @returns A new node with the item added
 */
function insertItemInNode<T, K extends keyof T, U>(
  node: T,
  { childrenKey, newItem, index }: AddItemOptions<T, K, U>,
): T {
  let children = getChildren<T, K, U>(node, childrenKey);
  const position = index ?? children.length;
  children = children.filter((_, _index: number) => _index !== index);
  const updatedChildren = [...children.slice(0, position), newItem, ...children.slice(position)];

  return { ...node, [childrenKey]: updatedChildren } as T;
}

/**
 * Safely retrieves the children array from a node.
 *
 * @param node - The tree node
 * @param key - The key that holds the children array
 * @returns The children array or an empty array if not found
 */
function getChildren<T, K extends keyof T, U>(node: T, key: K): U[] {
  return (node[key] as unknown as U[]) ?? [];
}

/**
 * Recursively inserts a new item into a nested tree structure.
 * Works with any child array key (e.g., "fieldGroup", "nodes", "items").
 *
 * @template T - Type of the tree node
 * @template K - Key of the children array in the node
 * @template U - Type of each child item
 *
 * @param tree - The root of the tree
 * @param options - Configuration options for insertion
 * @returns A new tree with the item added (non-mutating)
 */
export function addItemToTree<T, K extends keyof T, U>(
  tree: T,
  options: AddItemOptions<T, K, U>,
): T {
  const { idKey, childrenKey, targetId } = options;

  if ((tree[idKey] as unknown) === targetId) {
    return insertItemInNode(tree, options);
  }

  const children = getChildren<T, K, U>(tree, childrenKey);
  if (!Array.isArray(children) || children.length === 0) {
    return tree;
  }

  const updatedChildren = children.map((child) => addItemToTree(child as unknown as T, options));

  return { ...tree, [childrenKey]: updatedChildren } as T;
}

//** =============== Moves an item from one index to another within an array immutably. =============== */
/**
 * Moves an item from one index to another within an array immutably.
 */
function moveItemInArray<T>(array: readonly T[], fromIndex: number, toIndex: number): T[] {
  if (!Array.isArray(array) || array.length === 0) return [];

  const cloned = [...array];
  const [movedItem] = cloned.splice(fromIndex, 1);
  cloned.splice(toIndex, 0, movedItem);

  return cloned;
}

/**
 * Recursively moves an item within a tree structure based on a target node key.
 * Works with any tree-like object that has an ID and a children array.
 */
export function moveItemInTree<T>(tree: T, options: MoveItemInTreeOptions<T>): T {
  const { idKey, childrenKey, targetId, fromIndex, toIndex } = options;
  const children = (tree[childrenKey] as unknown as T[]) ?? [];

  if ((tree[idKey] as unknown) === targetId) {
    const updatedChildren = moveItemInArray(children, fromIndex, toIndex);
    return { ...tree, [childrenKey]: updatedChildren } as T;
  }

  if (!Array.isArray(children) || children.length === 0) return tree;

  const updatedChildren = children.map((child) => moveItemInTree(child, options));

  return { ...tree, [childrenKey]: updatedChildren } as T;
}

//** =============== Moves an item between groups (or within the same group) inside a nested tree structure. =============== */

/**
 * Transfers an item from one array to another without mutating the originals.
 *
 * @template T - The element type.
 * @param {T[]} sourceArray - The source array.
 * @param {T[]} targetArray - The destination array.
 * @param {number} fromIndex - The index of the item to remove from the source array.
 * @param {number} toIndex - The index to insert the item in the target array.
 * @returns {{ updatedSource: T[]; updatedTarget: T[] }} The updated arrays.
 */
function transferItemBetweenArrays<T>(
  sourceArray: T[],
  targetArray: T[],
  fromIndex: number,
  toIndex: number,
): { updatedSource: T[]; updatedTarget: T[] } {
  const movedItem = sourceArray[fromIndex];
  const updatedSource = [...sourceArray.slice(0, fromIndex), ...sourceArray.slice(fromIndex + 1)];
  const updatedTarget = [
    ...targetArray.slice(0, toIndex),
    movedItem,
    ...targetArray.slice(toIndex),
  ];
  return { updatedSource, updatedTarget };
}

/**
 * Moves an item between groups (or within the same group) inside a nested tree structure.
 *
 * This function recursively finds the source and target groups by their IDs,
 * and moves one item from the source group to the target group at the specified indexes.
 * It supports any tree-like structure that uses a configurable children property
 * (e.g., "nodes", "fieldGroup", "items").
 *
 * @template T - The type representing each node in the tree.
 * @template K - The key of the property in T that holds the child nodes array.
 * @param {T} tree - The root node of the tree to operate on.
 * @param {Object} options - The configuration object.
 * @param {keyof T} options.idKey - The key used to uniquely identify each node.
 * @param {K} options.childrenKey - The key used for the array of child nodes.
 * @param {unknown} options.sourceId - The ID of the source group.
 * @param {unknown} options.targetId - The ID of the target group.
 * @param {number} options.fromIndex - The index of the item to move in the source group.
 * @param {number} options.toIndex - The index in the target group where the item will be inserted.
 * @returns {T} A new tree with the item moved between groups.
 */
export function moveItemBetweenGroups<T, K extends keyof T>(
  tree: T,
  {
    idKey,
    childrenKey,
    sourceId,
    targetId,
    fromIndex,
    toIndex,
  }: MoveItemBetweenGroupsOptions<T, K>,
): T {
  const children = (tree[childrenKey] as unknown as T[]) ?? [];
  if (!Array.isArray(children) || children.length === 0) return tree;

  let sourceGroup: T | undefined;
  let targetGroup: T | undefined;

  const findGroups = (node: T): void => {
    if (node[idKey] === sourceId) sourceGroup = node;
    if (node[idKey] === targetId) targetGroup = node;

    const nestedChildren = node[childrenKey] as unknown as T[] | undefined;
    if (nestedChildren?.length) {
      for (const child of nestedChildren) {
        findGroups(child);
        if (sourceGroup && targetGroup) return;
      }
    }
  };

  findGroups(tree);

  if (!sourceGroup || !targetGroup) return tree;

  const sourceChildren = (sourceGroup[childrenKey] as unknown as T[]) ?? [];
  const targetChildren = (targetGroup[childrenKey] as unknown as T[]) ?? [];

  const { updatedSource, updatedTarget } = transferItemBetweenArrays(
    sourceChildren,
    targetChildren,
    fromIndex,
    toIndex,
  );

  const replaceGroups = (node: T): T => {
    if (node[idKey] === sourceId) {
      return { ...node, [childrenKey]: updatedSource } as T;
    }
    if (node[idKey] === targetId) {
      return { ...node, [childrenKey]: updatedTarget } as T;
    }

    const nestedChildren = node[childrenKey] as unknown as T[];
    if (!nestedChildren?.length) return node;

    return {
      ...node,
      [childrenKey]: nestedChildren.map(replaceGroups),
    } as T;
  };

  return replaceGroups(tree);
}
