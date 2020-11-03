import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {RouterModule, Routes} from '@angular/router';
import { ItemComponent } from './shopping-cart/item/item.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'shopping-cart', component: ShoppingCartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
