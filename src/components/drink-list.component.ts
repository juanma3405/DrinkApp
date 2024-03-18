import { Component, OnInit } from '@angular/core';
import { CocktailDBService } from '../services/cocktailDBService.service';
import {Drink} from '../models/drink';
import { Router } from '@angular/router';

@Component({
  selector: 'drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

drinks: Drink[] = [];;
drinkId: string;
drink: Drink;


constructor(private router: Router, private cocktailService: CocktailDBService){
    this.drinks = [];
    this.drinkId = '';
    this.drink = {};
    this.drink.ingredients = [];
    this.drink.ingmeasures = [];
}

  ngOnInit(){
    this.drinks = this.cocktailService.getDrinkList();
    console.log(this.drinks);
    console.log("Entro a componente drink-list");
  }

  volverAInicio(){
    this.router.navigate(['/drink']);
  }

  async viewDrink(drink: Drink){
    debugger;
    if (drink.idDrink!= undefined){
      this.drinkId = drink.idDrink?.toString();
    }
      await this.cocktailService.getCocktailDetail(this.drinkId).then((response: any) => {
      console.log(response);
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
       this.drink.ingredients?.forEach(ingredient => console.log(ingredient));
       this.drink.ingmeasures?.forEach(ingmeasure => console.log(ingmeasure));
    })
    this.router.navigate(['/drinkDetail'], {
      state: {drinkChosen: this.drink}
    });
  }

}