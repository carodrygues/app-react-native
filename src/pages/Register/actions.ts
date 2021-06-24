import { Alert } from 'react-native';
import { User } from "../../models/user";
import axios from 'axios';

export async function registerUser(email: string, userPassword: string, name: string, age: number, address: string):Promise<any>{
    const register = {email, userPassword, name, age, address } as User;

    if (register.name === undefined || register.name.trim() === '') {
      Alert.alert('Campo Vazio','Nome é obrigatório!');
      return;
    }
    if (isNaN(age) ) {
      Alert.alert('Campo Vazio','Idade é obrigatória!');
      return;
    }
    if (register.age === undefined || register.age < 18 ) {
      Alert.alert('Atenção','A idade precisa ser igual ou maior que 18!');
      return;
    }
    if (register.address === undefined || register.address.trim() === '') {
      Alert.alert('Campo Vazio','Endereço é obrigatório!');
      return;
    }
    if (register.email === undefined || register.email.trim() === '') {
      Alert.alert('Campo Vazio','Email é obrigatório!');
      return;
    }
    if (register.userPassword === undefined || register.userPassword.trim() === '') {
      Alert.alert('Campo Vazio','Senha é obrigatória!');
      return;
    }

    try {
      const response = await axios.post('https://example-ecommerce.herokuapp.com/user/customer/add', {
        address: register.address,
        age: register.age,
        email: register.email,
        name: register.name,
        userPassword: register.userPassword  
      });
      console.log(response);
      return true;
    } catch (error) {
      Alert.alert('Erro','Cadastro não realizado!');
      return null;
    }
}

