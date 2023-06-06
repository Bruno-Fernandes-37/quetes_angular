import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/Cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
  cocktails?: Cocktail[];

  constructor(public cocktailService: CocktailService) {
    
  }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }


 
}
