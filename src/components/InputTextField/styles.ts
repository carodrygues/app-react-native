import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    label: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "left",
        color: '#592F20',
        fontWeight:'bold'
    },

    input: {
       height: 40,
       marginBottom: 40,
       borderWidth: 1,
       borderColor: "#592F20",
       paddingHorizontal: 10,
       width: Dimensions.get('screen').width - 80,
    },
});