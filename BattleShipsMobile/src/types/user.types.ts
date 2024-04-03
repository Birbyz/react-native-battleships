export type UserType = {
  id: number;
  email: string;
  password: string;
};

export const emptyUserType: UserType = {
  id: 0,
  email: "",
  password: "",
};
