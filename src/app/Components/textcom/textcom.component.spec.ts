import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcomComponent } from './textcom.component';

describe('TextcomComponent', () => {
  let component: TextcomComponent;
  let fixture: ComponentFixture<TextcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextcomComponent]
    });
    fixture = TestBed.createComponent(TextcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
