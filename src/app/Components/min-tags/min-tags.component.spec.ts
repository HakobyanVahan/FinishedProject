import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTagsComponent } from './min-tags.component';

describe('MinTagsComponent', () => {
  let component: MinTagsComponent;
  let fixture: ComponentFixture<MinTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinTagsComponent]
    });
    fixture = TestBed.createComponent(MinTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
