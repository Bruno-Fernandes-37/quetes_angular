import { Injectable } from '@angular/core';
import { Cocktail } from './models/Cocktail';
import { cocktailListTest } from './models/mocks/mock-cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktails: Cocktail[] = cocktailListTest;

  constructor() { }

  
  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
