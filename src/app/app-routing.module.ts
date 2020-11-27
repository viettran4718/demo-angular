import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {BoardComponent} from './board/board.component';
import {LoginComponent} from './authenticate/login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {AuthGuardService} from './authenticate/auth-guard.service';
import {LogoutComponent} from './authenticate/logout/logout.component';
import {UserUpdateComponent} from './user/user-update.component';
import {UserAddComponent} from './user/user-add.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'board', component: BoardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'logout', component: LogoutComponent},

      {path: 'user', component: UserComponent},
      {path: 'user/new', component: UserAddComponent},
      {path: 'user/update/:id', component: UserUpdateComponent},
      {path: 'user/view/:id', component: UserUpdateComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
