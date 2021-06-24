import React from 'react';
import { Button, View, Text, Alert, Image } from 'react-native';

import styles from './styles';
import InputTextField from '../../components/InputTextField';
import * as actions from './actions';

export default function HomePage({ navigation }: any) {

  const [ email, setEmail ] = React.useState('');
  const [ userPassword, setUserPassword ] = React.useState('');

    function openRegister(): void {
      navigation.reset({
          index: 0,
          routes: [{ name: 'Register' }],
      });
    }

    function openProducts(): void {
      navigation.reset({
          index: 0,
          routes: [{ name: 'Products' }],
      });
    }

    function login() {
      actions.logar(email, userPassword).then((result) => {
        if (!result) {
          return;
        }
        openProducts();
      })
      .catch((error) => {
          console.error(error);
          Alert.alert(
              'Erro ao Autenticar',
              'Erro ao tentar logar!'
          );
      });
    }

    return (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={require('../../../assets/icon.png')} />
          </View>
              <InputTextField value={email} label="Usuário" onChange={setEmail} secure={false}/>
              <InputTextField value={userPassword} label="Senha" onChange={setUserPassword} secure={true}/>
                <View > 
                  <Button color="#60A6A6" title='Entrar' onPress={login} />
                </View>
            <Text style={styles.textLink} onPress={openRegister}>Não tem cadastro? Clique aqui.</Text>
        </View>
    );

}