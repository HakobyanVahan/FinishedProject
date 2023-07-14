import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAllPostsComponent } from './category-all-posts.component';

describe('CategoryAllPostsComponent', () => {
  let component: CategoryAllPostsComponent;
  let fixture: ComponentFixture<CategoryAllPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAllPostsComponent]
    });
    fixture = TestBed.createComponent(CategoryAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
