import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadnextComponent } from './readnext.component';

describe('ReadnextComponent', () => {
  let component: ReadnextComponent;
  let fixture: ComponentFixture<ReadnextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadnextComponent]
    });
    fixture = TestBed.createComponent(ReadnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
