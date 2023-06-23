import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAuthorsComponent } from './one-authors.component';

describe('OneAuthorsComponent', () => {
  let component: OneAuthorsComponent;
  let fixture: ComponentFixture<OneAuthorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneAuthorsComponent]
    });
    fixture = TestBed.createComponent(OneAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
