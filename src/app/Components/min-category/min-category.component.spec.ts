import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCategoryComponent } from './min-category.component';

describe('MinCategoryComponent', () => {
  let component: MinCategoryComponent;
  let fixture: ComponentFixture<MinCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinCategoryComponent]
    });
    fixture = TestBed.createComponent(MinCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
