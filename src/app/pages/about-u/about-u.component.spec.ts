import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUComponent } from './about-u.component';

describe('AboutUComponent', () => {
  let component: AboutUComponent;
  let fixture: ComponentFixture<AboutUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUComponent]
    });
    fixture = TestBed.createComponent(AboutUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
