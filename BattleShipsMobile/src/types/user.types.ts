export type newUserType = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  avatar: FormData;
  password: string;
};

export const emptyNewUserType: newUserType = {
  id: 0,
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  phone: "",
  avatar: null,
  password: "",
};
