import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopoeiaComponent } from './onomatopoeia.component';

describe('OnomatopoeiaComponent', () => {
  let component: OnomatopoeiaComponent;
  let fixture: ComponentFixture<OnomatopoeiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnomatopoeiaComponent]
    });
    fixture = TestBed.createComponent(OnomatopoeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
