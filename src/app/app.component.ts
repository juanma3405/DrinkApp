import { Component } from '@angular/core';
import { CocktailDBService } from '../services/cocktailDBService.service';
import {Drink} from '../models/drink'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tragosapp';
  drink: Drink;

  constructor(private cocktailService: CocktailDBService){
    this.drink = {};
    this.drink.ingredients = [];
  }

  ngOnInit(){
    //comunicación usando fetch
    /*this.cocktailService.getRandomCocktail().then((response: any) => {
      console.log(response);
      this.drink.name = response.drinks[0].strDrink;
      var i = 1;
      var nroIngrediente = 'strIngredient' + i;
      while (response.drinks[0][nroIngrediente] != null || response.drinks[0][nroIngrediente] != undefined ){
        this.drink.ingredients?.push(response.drinks[0][nroIngrediente]);
        i++;
        var nroIngrediente = 'strIngredient' + i;
      }
      console.log(this.drink.name);
      console.log(this.drink);
      this.drink.ingredients?.forEach(ingredient => console.log(ingredient));
    });*/
    //comunicación usando http
    /*this.cocktailService.getRandomCocktail()
    .subscribe(response => {
      console.log(response);
    })*/
  }
}
