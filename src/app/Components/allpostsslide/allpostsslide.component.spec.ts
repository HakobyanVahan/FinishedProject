import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpostsslideComponent } from './allpostsslide.component';

describe('AllpostsslideComponent', () => {
  let component: AllpostsslideComponent;
  let fixture: ComponentFixture<AllpostsslideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllpostsslideComponent]
    });
    fixture = TestBed.createComponent(AllpostsslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
