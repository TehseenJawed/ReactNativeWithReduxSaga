import React from 'react';
import {Text, View} from 'react-native';
import ProductCard from '../../components/ProductCard';
import ProductImage from '../../assets/images/product_image.png';

const Home = () => {
  const newObj = [
    {
      name: 'Mens Plain T Shirt',
      newPrice: '40.75',
      oldPrice: '59.75',
      discount: '10%',
      image: ProductImage,
    }
  ]
  return (
    <View>
      <ProductCard data={newObj[0]} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
