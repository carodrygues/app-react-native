import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { Products } from "../../models/products";
import axios from 'axios';
import styles from './styles';

//import * as actions from './actions';

export default function ProductsList({ navigation }: any) {

  const [products, setProducts] = useState(Object);

  async function getProductsList(): Promise<Products[]> {
    try {
      const response = await axios.get('https://example-ecommerce.herokuapp.com/product/list');
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
      getProductsList().then((items) => setProducts(items));
  }, []);

  function goHome(): void {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
    });
  }

   
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item, index }) => (
          <View >
            <Text style={styles.name}>{item.name}</Text>
            <Text>Fabricante: {item.factory.name}</Text>
            <Text>Em Estoque: {item.amount} peças</Text>
                <View>
                    <Text>Preço: </Text>
                     <Text style={styles.price}>
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </Text>
                </View>
            </View>
        )}
      />
      <Button color="#60A6A6"  title='VOLTAR' onPress={goHome} />
    </View>
  );
}