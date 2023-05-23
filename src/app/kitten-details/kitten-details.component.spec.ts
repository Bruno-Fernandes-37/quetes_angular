import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenDetailsComponent } from './kitten-details.component';

describe('KittenDetailsComponent', () => {
  let component: KittenDetailsComponent;
  let fixture: ComponentFixture<KittenDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KittenDetailsComponent]
    });
    fixture = TestBed.createComponent(KittenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
