export interface UserModel {
    id: number,
    name: string,
    surname: string,
    email: string,
    role: string,
    created_at: string,
    updated_at: string,
    password?: string
}