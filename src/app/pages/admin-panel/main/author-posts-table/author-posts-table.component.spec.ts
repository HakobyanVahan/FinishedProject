import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPostsTableComponent } from './author-posts-table.component';

describe('AuthorPostsTableComponent', () => {
  let component: AuthorPostsTableComponent;
  let fixture: ComponentFixture<AuthorPostsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorPostsTableComponent]
    });
    fixture = TestBed.createComponent(AuthorPostsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
