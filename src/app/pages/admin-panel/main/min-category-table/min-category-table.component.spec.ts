import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCategoryTableComponent } from './min-category-table.component';

describe('MinCategoryTableComponent', () => {
  let component: MinCategoryTableComponent;
  let fixture: ComponentFixture<MinCategoryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinCategoryTableComponent]
    });
    fixture = TestBed.createComponent(MinCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
