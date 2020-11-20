import {Injectable} from '@angular/core';

export const TOKEN = 'token';
export const CURRENT_USER = 'currentUser';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() {
  }

  // fake authen
  authenticate(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem(TOKEN, `Bearer fakeToken`);
      const curUser = {
        username: 'admin',
        password: 'admin',
        fullName: 'Admin'
      };
      sessionStorage.setItem(CURRENT_USER, JSON.stringify(curUser));
      sessionStorage.setItem(AUTHENTICATED_USER, curUser.username);
      return curUser;
    }
    return null;
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);

  }

  getUserInfo() {
    const userInfo = JSON.parse(sessionStorage.getItem(CURRENT_USER));
    return userInfo;
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem(TOKEN);
  }

  isUserLogin() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(CURRENT_USER);
  }
}
