import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../pages/Home';
import Products from '../pages/Products';
import Register from '../pages/Register';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Products"
                    options={{
                        title: 'Lista de Produtos',
                    }}
                    component={Products}
                />
                <Stack.Screen
                    name="Register"
                    options={{
                        title: 'Cadastro de Usuários',
                    }}
                    component={Register}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
