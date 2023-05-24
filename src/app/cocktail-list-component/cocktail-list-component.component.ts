import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';
import { Cocktail } from '../models/Cocktail';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktailList?: Cocktail[];

  constructor(public cocktailService: CocktailService) {
    
  }

  ngOnInit(): void {
    this.cocktailList = this.cocktailService.getCocktails();
  }
 
  

}
