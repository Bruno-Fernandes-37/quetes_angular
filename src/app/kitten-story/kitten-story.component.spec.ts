import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenStoryComponent } from './kitten-story.component';

describe('KittenStoryComponent', () => {
  let component: KittenStoryComponent;
  let fixture: ComponentFixture<KittenStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KittenStoryComponent]
    });
    fixture = TestBed.createComponent(KittenStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
