import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Drink} from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class CocktailDBService {

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'; // Ajusta la URL según la configuración de tu API

  drinkList: Drink[] = [];

  constructor(private http: HttpClient) { }

  //comunicación usando Fetch
   getRandomCocktail(): Promise<any> {
    return fetch(this.apiUrl + 'random.php', {
      method: 'GET'
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  //comunicacion usando http
  /*getRandomCocktail() {
    return this.http.get(this.apiUrl);
  }*/

  getCocktail(cocktailName: string): Promise<any> {
    return fetch(this.apiUrl + 'search.php?s=' + cocktailName,{
      method: 'GET'
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  getCocktailDetail(cocktailId: string): Promise<any> {
    return fetch(this.apiUrl + 'lookup.php?i=' + cocktailId,{
      method: 'GET'
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  setDrinkList(drinks: Drink[]){
    this.drinkList = drinks;
  }

  getDrinkList(){
    return this.drinkList;
  }
  

}