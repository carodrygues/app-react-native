import { User } from "../../models/user";
import axios from 'axios';

export async function logar(email: string, userPassword: string) {
    try {
        const response = await axios.post('https://example-ecommerce.herokuapp.com/user/login', {
            login: email,
            password: userPassword
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Usuário ou Senha Inválida!');
        return null;
    }
}
