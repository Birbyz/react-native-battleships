export type RegisteredUserType = {
    id: string,
    email: string,
};

export const emptyRegisteredUserType: RegisteredUserType = {
    id: '',
    email: ''
}

export const enum AuthScreensEnum {
    LOGIN = 'Login',
    REGISTER = 'Register',
    PROFILE = 'Profile'
}