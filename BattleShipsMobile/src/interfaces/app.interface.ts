import { UserType } from "../types/user.types";

export interface IAppContext {
    jwt: string | null;
    login: (loginData: UserType) => Promise<void>;
    register: (registerData: UserType) => Promise<void>;
}