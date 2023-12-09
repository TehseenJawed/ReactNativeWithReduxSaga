import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import ProductCard from '../../components/ProductCard';
import Modal from '../../components/Modal';
import {productData} from '../../assets/dummy_data';

const Home = () => {
  const [products, setProducts] = useState(productData);
  const modalProps = useState({
    flag: false,
    product: {},
  });
  return (
    <View>
      <FlatList
        data={products}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ProductCard
            data={item}
            updateData={setProducts}
            index={index}
            modalProps={modalProps}
          />
        )}
        keyExtractor={item => item.id}
      />
      {/* {products.map((v, i) => (
        <ProductCard
          data={v}
          updateData={setProducts}
          index={i}
          modalProps={modalProps}
        />
      ))} */}
      <Modal modalProps={modalProps} />
    </View>
  );
};

export default Home;
