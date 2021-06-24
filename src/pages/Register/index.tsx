import React  from 'react';
import { Button, View, Alert } from 'react-native';

import styles from './styles';
import InputTextField from '../../components/InputTextField';
import * as actions from './actions';

export default function Register({ navigation }: any) {

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    function registerUser() {
  
        actions.registerUser(email, userPassword, name, parseInt(age), address).then((result) => {
            if (result == true) {
                goHome();
                Alert.alert('Cadastro Realizado com Sucesso', 'Você já pode se logar!')
            }
          })
          .catch((error) => {
              console.error(error);
          });
    }

    function goHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    return (
        <View style={styles.container}>
                <InputTextField value={name} label="Nome" onChange={setName} secure={false}/>
                <InputTextField value={age} label="Idade" onChange={setAge}  secure={false}/>
                <InputTextField value={address} label="Endereço" onChange={setAddress} secure={false}/>
                <InputTextField value={email} label="E-mail" onChange={setEmail} secure={false}/>
                <InputTextField value={userPassword} label="Senha" onChange={setUserPassword} secure={true}/>
            <View style={styles.fixToText}>
                <Button color="#60A6A6"  title='VOLTAR' onPress={goHome} />
                <Button color="#60A6A6"  title='Cadastrar' onPress={registerUser} />
            </View>
        </View>
    );

}