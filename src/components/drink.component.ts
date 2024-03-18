import { Component, OnInit } from '@angular/core';
import { CocktailDBService } from '../services/cocktailDBService.service';
import {Drink} from '../models/drink';
import { Router } from '@angular/router';

@Component({
  selector: 'drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

drink: Drink;
loading = true;
drinkName: string;
searchDrinks: Array<Drink>;



constructor(private cocktailService: CocktailDBService, private router: Router){
    this.drink =  {};
    this.drink.ingredients = [];
    this.drink.ingmeasures = [];
    this.drinkName = '';
    this.searchDrinks = [];
}

  async ngOnInit(){
    await this.cocktailService.getRandomCocktail().then((response: any) => {
      this.drink.name = response.drinks[0].strDrink;
      this.drink.instructions = response.drinks[0].strInstructions;
      this.drink.urlImage = response.drinks[0].strDrinkThumb;
      var i = 1;
      var nroIngrediente = 'strIngredient' + i;
      var nroIngMeasure = 'strMeasure' + i;
      while (response.drinks[0][nroIngrediente] != null || response.drinks[0][nroIngrediente] != undefined ){
        this.drink.ingredients?.push(response.drinks[0][nroIngrediente]);
        this.drink.ingmeasures?.push(response.drinks[0][nroIngMeasure]);
        i++;
        var nroIngrediente = 'strIngredient' + i;
        var nroIngMeasure = 'strMeasure' + i;
      }
       this.loading = false;
    });
  }

  async searchDrink(){
    debugger;
    await this.cocktailService.getCocktail(this.drinkName).then((response: any) => {
      if (response.drinks !== null){
        for(let i= 0; i <response.drinks.length; i++){
        let drink: Drink;
        drink = {};
        drink.idDrink = response.drinks[i].idDrink;
        drink.name = response.drinks[i].strDrink;
        drink.urlImage = response.drinks[i].strDrinkThumb;
        this.searchDrinks.push(drink);
      }
      this.cocktailService.setDrinkList(this.searchDrinks);
      this.router.navigate(['/drinkList'])
      }
      else {
        this.cocktailService.setDrinkList(this.searchDrinks);
        this.router.navigate(['/drinkList']);
      }
    });
  }
  
}

