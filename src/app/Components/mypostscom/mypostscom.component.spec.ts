import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostscomComponent } from './mypostscom.component';

describe('MypostscomComponent', () => {
  let component: MypostscomComponent;
  let fixture: ComponentFixture<MypostscomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MypostscomComponent]
    });
    fixture = TestBed.createComponent(MypostscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
