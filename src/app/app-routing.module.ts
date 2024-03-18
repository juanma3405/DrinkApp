import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrinkComponent} from 'src/components/drink.component';
import { DrinkListComponent } from 'src/components/drink-list.component';
import { DrinkDetailComponent } from 'src/components/drink-detail.component';

const routes: Routes = [
  {path:'', component: DrinkComponent},
  {path:'drink', component: DrinkComponent},
  {path:'drinkList', component: DrinkListComponent},
  {path:'drinkDetail', component: DrinkDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
