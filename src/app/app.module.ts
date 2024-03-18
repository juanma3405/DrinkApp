import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailDBService } from 'src/services/cocktailDBService.service';
import { DrinkComponent } from 'src/components/drink.component';
import { FormsModule } from '@angular/forms';
import { DrinkListComponent } from 'src/components/drink-list.component';
import { DrinkDetailComponent } from 'src/components/drink-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkComponent,
    DrinkListComponent,
    DrinkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CocktailDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
