import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UISidebar } from './ui-sidebar';

describe('Sidebar', () => {
  let component: UISidebar;
  let fixture: ComponentFixture<UISidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UISidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(UISidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
