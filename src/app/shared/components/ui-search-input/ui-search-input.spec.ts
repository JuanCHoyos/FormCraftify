import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UISearchInput } from './ui-search-input';

describe('SearchInput', () => {
  let component: UISearchInput;
  let fixture: ComponentFixture<UISearchInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UISearchInput],
    }).compileComponents();

    fixture = TestBed.createComponent(UISearchInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
