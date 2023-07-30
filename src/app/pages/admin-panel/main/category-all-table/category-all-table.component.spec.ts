import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAllTableComponent } from './category-all-table.component';

describe('CategoryAllTableComponent', () => {
  let component: CategoryAllTableComponent;
  let fixture: ComponentFixture<CategoryAllTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAllTableComponent]
    });
    fixture = TestBed.createComponent(CategoryAllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
