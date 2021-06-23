import { User } from "../../models/user";
import axios from 'axios';

export function registerUser(email: string, userPassword: string, name: string, age: number, address: string) {
    const register = {email, userPassword, name, age, address } as User;

    axios.post('https://example-ecommerce.herokuapp.com/user/customer/add', {
        address: register.address,
        age: register.age,
        email: register.email,
        name: register.name,
        userPassword: register.userPassword  
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });
}

