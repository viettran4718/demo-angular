import {Role} from './role';

export interface IUser {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  fullName?: string;
  active?: boolean;
  isEmailVerified?: boolean;
  roles?: Role[];
}

export class User implements IUser {
   constructor(public id?: number,
               public email?: string,
               public username?: string,
               public password?: string,
               public fullName?: string,
               public active?: boolean,
               public isEmailVerified?: boolean,
               public roles?: Role[]
   ) {
  }
}
