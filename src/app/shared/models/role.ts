export interface IRole {
  id?: number;
  role?: string;
}

export class Role implements IRole {
  constructor(public id?: number,
              public role?: string
  ) {
  }
}
