export interface Drink {
  idDrink?: number;
  name?: string | null;
  instructions?: string | null;
  ingredients?: Array<string> | null;
  ingmeasures?: Array<string> | null;
  urlImage?: string | null;
}