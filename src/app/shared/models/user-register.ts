export interface IUserRegister {
  username?: string;
  fullname?: string;
  password?: string;
  phoneNumber?: string;
  email?: string;
  birthday?: Date;
  role?: string;
}

export class UserRegister implements IUserRegister {
  constructor(public username?: string,
              public fullname?: string,
              public password?: string,
              public phoneNumber?: string,
              public email?: string,
              public birthday?: Date,
              public role?: string,
  ) {
  }
}
