import UserClient from "../http/UserClient";
import axios, {AxiosResponse} from "axios";

describe('Myh First test', () => {
    let userClient: UserClient = new UserClient();

    it('Registers a new user', async () => {
        let response: AxiosResponse = await userClient.postRegisterUser({
            email: 'something@something.com',
            password: 'testpass123',
            age: 25,
            name: "dragan"
        });

        expect(response.status).toBe(201);
    })

    it('Logs a user in', async () => {
        let response: AxiosResponse = await userClient.postLoginUser({
            email: 'something@something.com',
            password: 'testpass123'
        });

        expect(response.status).toBe(200);
    })

})