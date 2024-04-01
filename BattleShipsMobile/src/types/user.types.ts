export type newUserType = {
  id: number;
  email: string;
  password: string;
};

export const emptyNewUserType: newUserType = {
  id: 0,
  email: "",
  password: "",
};
