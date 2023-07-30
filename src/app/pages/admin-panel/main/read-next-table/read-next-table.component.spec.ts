import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadNextTableComponent } from './read-next-table.component';

describe('ReadNextTableComponent', () => {
  let component: ReadNextTableComponent;
  let fixture: ComponentFixture<ReadNextTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadNextTableComponent]
    });
    fixture = TestBed.createComponent(ReadNextTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
