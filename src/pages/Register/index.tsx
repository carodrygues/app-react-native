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
      if(parseInt(age) < 18) {
        Alert.alert('Só pode se cadastrar a partir dos 18 anos!');
        return;
      }
      try {
        actions.registerUser(email, userPassword, name, parseInt(age), address);
      } catch(error) {
          console.log(error);
      }
      
      //goHome();
    }

    function goHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    return (
        <View style={styles.container}>
                <InputTextField value={name} label="Nome" onChange={setName} />
                <InputTextField value={age} label="Idade" onChange={setAge} />
                <InputTextField value={address} label="Endereço" onChange={setAddress} />
                <InputTextField value={email} label="E-mail" onChange={setEmail} />
                <InputTextField value={userPassword} label="Senha" onChange={setUserPassword} />
            <View style={styles.fixToText}>
                <Button color="#60A6A6"  title='VOLTAR' onPress={goHome} />
                <Button color="#60A6A6"  title='Cadastrar' onPress={registerUser} />
            </View>
        </View>
    );

}