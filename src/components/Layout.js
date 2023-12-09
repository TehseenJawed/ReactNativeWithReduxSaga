import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {WHITE} from '../assets/colors/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Layout = ({children}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categoryLabels = [
    {
      name: 'All',
      navigate: 'home',
    },
    {
      name: 'Women',
      navigate: 'home',
    },
    {
      name: 'Men',
      navigate: 'home',
    },
    {
      name: 'Kids',
      navigate: 'home',
    },
    {
      name: 'Bags & Dress',
      navigate: 'home',
    },
    {
      name: 'Gerocery',
      navigate: 'home',
    },
    {
      name: 'Fashion',
      navigate: 'home',
    },
    {
      name: 'Trending',
      navigate: 'home',
    },
  ];

  const changeNavigation = index => {
    console.log('index', index);
    setActiveIndex(index)
  };

  const categoryLabelJSX = ({item, index}) => {
    const isActiveLabel = activeIndex === index;
    return (
      <TouchableOpacity
        onPress={() => changeNavigation(index)}
        style={{
          ...styles.categoryContainer,
          ...{backgroundColor: isActiveLabel ? '#E3F2FD' : '#E8EBF0'},
        }}>
        <Text
          style={{
            ...styles.categoryTitle,
            ...{fontWeight: isActiveLabel ? '600' : '400'},
          }}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.headerCategoryContainer}>
        <FlatList
          data={categoryLabels}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={categoryLabelJSX}
          keyExtractor={item => item.id}
        />
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  headerCategoryContainer: {
    width: '100%',
    height: 50,
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  categoryContainer: {
    backgroundColor: '#E8EBF0',
    marginLeft: wp(2),
    paddingHorizontal: wp(6),
    height: hp(5.5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 13,
    color: '#253D4E',
  },
});

export default Layout;
