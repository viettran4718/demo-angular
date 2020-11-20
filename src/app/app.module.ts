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
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './authenticate/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LogoutComponent } from './authenticate/logout/logout.component';

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
    UserComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
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
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
