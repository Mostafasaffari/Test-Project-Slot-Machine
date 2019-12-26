export interface IUser {
  name: string;
  email: string;
  password: string;
  coins: number;
}
export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}
export interface IUserSignIn {
  email: string;
  password: string;
}
