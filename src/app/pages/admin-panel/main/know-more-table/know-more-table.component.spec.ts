import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreTableComponent } from './know-more-table.component';

describe('KnowMoreTableComponent', () => {
  let component: KnowMoreTableComponent;
  let fixture: ComponentFixture<KnowMoreTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowMoreTableComponent]
    });
    fixture = TestBed.createComponent(KnowMoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
