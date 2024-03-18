import { Component, OnInit } from '@angular/core';
import {Drink} from '../models/drink';
import { Router } from '@angular/router';

@Component({
  selector: 'drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {

drink: Drink;



constructor(private router: Router){
    this.drink =  {};
    this.drink.ingredients = [];
    this.drink.ingmeasures = [];
}

  ngOnInit(){
    this.drink = history.state.drinkChosen;
    console.log("Entro a componente drink-detail");
    console.log(this.drink);
  }

  volverAInicio(){
    this.router.navigate(['/drinkList']);
  }
  
}
