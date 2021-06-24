import React from 'react';
import { Text, TextInput } from 'react-native';

import styles from './styles';

interface Props {
    label: string;
    value: string;
    secure: boolean;
    onChange: (text: string) => void;
}

export default function InputTextField(props: Props) {
    return (
        <>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput  style={styles.input} onChangeText={props.onChange} secureTextEntry={props.secure} />
        </>
    );
}