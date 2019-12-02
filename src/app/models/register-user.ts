export interface RegisterUser {
    email: string;
    password: string;
    confirmPassword: string;
    role: string; //These are user Roles. Are these actually strings??
}