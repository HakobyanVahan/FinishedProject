import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTagsTableComponent } from './min-tags-table.component';

describe('MinTagsTableComponent', () => {
  let component: MinTagsTableComponent;
  let fixture: ComponentFixture<MinTagsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinTagsTableComponent]
    });
    fixture = TestBed.createComponent(MinTagsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
