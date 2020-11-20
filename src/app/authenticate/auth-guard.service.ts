import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticateService} from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthenticateService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isUserLogin()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
