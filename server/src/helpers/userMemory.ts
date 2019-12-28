export interface IUser {
  name: string;
  password: string;
  email: string;
  coins: number;
}
let memoryUser: IUser[] = [];

const findUserByEmail = (email: string): IUser | undefined => {
  const user = memoryUser.find(s => s.email === email);
  return user;
};
const findUserByEmailAndPassword = (
  email: string,
  password: string
): IUser | undefined => {
  const user = memoryUser.find(
    s => s.email === email && s.password === password
  );
  return user;
};

const addUser = (input: IUser) => {
  memoryUser.push({
    name: input.name,
    email: input.email,
    password: input.password,
    coins: input.coins
  });
};

export { findUserByEmail, findUserByEmailAndPassword, addUser };
