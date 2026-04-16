

export type  LoginForm ={
    email: string;
    password: string;
  
}

export type  RegisterForm ={
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    confirmPassword?: string;

}

export type token = {
    token?:string|null;
    username?:string|null
}