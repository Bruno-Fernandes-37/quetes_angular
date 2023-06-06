import { TestBed, waitForAsync } from '@angular/core/testing';
import { CocktailService } from './cocktail.service';
import { CocktailListComponent } from '../../pages/cocktail-list/cocktail-list.component';

describe('Quest Test Suite', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CocktailListComponent
      ],
    }).compileComponents();
  }));

  fit('service should be created', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    expect(service).toBeTruthy();
  });

  fit('should create a CocktailListComponent instance', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  fit(
    'component should have a public property named "cocktails"',
    waitForAsync(
      () => {
        const fixture = TestBed.createComponent(CocktailListComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.cocktails).toBeTruthy();
      }
    )
  );

  fit(
    'component should display at least one cocktail',
    waitForAsync(
      () => {
        const fixture = TestBed.createComponent(CocktailListComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const content = compiled.textContent;
        const first = fixture.componentInstance.cocktails![0];
        expect(content).toContain(first.name);
      }
    )
  );
});