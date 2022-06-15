import axios from "axios";

interface RegisterUserRequest {
    name: string,
    email: string,
    password: string,
    age: number
}

interface LoginUserRequest {
    email: string,
    password: string
}

export default class UserClient {

    public async postRegisterUser(request: RegisterUserRequest) {
        return axios.post('https://api-nodejs-todolist.herokuapp.com/user/register', request)
    }

    public async postLoginUser(request: LoginUserRequest) {
        return axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', request)
    }

}