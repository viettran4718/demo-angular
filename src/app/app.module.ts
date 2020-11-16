import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from './shopping-cart/item/item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BoardComponent} from './board/board.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ItemComponent,
    BoardComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    DragDropModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
