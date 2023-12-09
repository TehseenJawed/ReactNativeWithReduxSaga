import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WHITE, BLACK} from '../assets/colors/colors';
import CartIcon from '../assets/icons/cart_icon.svg';
import HeartNull from '../assets/icons/heart_null.svg';
import HeartFull from '../assets/icons/heart_full.svg';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';

const ProductCard = ({data, updateData, index, modalProps}) => {
  const [openQuantity, setOpenQuantity] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [modalOpen, setModalOpen] = modalProps;
  const currentPrice = data?.currentPrice?.split('.') || [];
  const oldPrice = data?.oldPrice?.split('.') || [];
  let imgSource = null;
  if (!!data?.profileImage) {
    imgSource = data?.profileImage;
  }
  const pressCart = () => {
    if (data?.availableColors?.length == 0) {
      setOpenQuantity(true);
    } else {
      setModalOpen({
        flag: true,
        product: data,
      });
    }
  };
  return (
    <View key={index} style={styles.productContainer}>
      <Image style={styles.productImage} source={imgSource} />
      <TouchableOpacity style={styles.heartColor}>
        {favorite ? (
          <TouchableOpacity onPress={() => setFavorite(false)}>
            <HeartFull width={20} height={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setFavorite(true)}>
            <HeartNull width={20} height={20} />
          </TouchableOpacity>
        )}
        {/* <HeartNull width={20} height={20} />
        <HeartFull width={18} height={18} /> */}
      </TouchableOpacity>
      <View style={styles.colorSelection}>
        {data?.availableColors?.map((v, i) => {
          if (i <= 2) {
            return <View style={{...styles.colorPalot, backgroundColor: v}} />;
          } else if (i === 3) {
            return <Text style={{color: WHITE}}>2</Text>;
          } else {
          }
        })}
      </View>
      <View style={styles.productName}>
        <Text>{data?.title}</Text>
        <View style={styles.priceContainer}>
          <View style={styles.productFeature}>
            <View style={styles.productPrice}>
              <Text>{data.currency}</Text>
              <Text style={styles.productCurrent1}>{currentPrice[0]}</Text>
              <Text style={styles.productCurrent2}>.{currentPrice[1]}</Text>
            </View>
            <View style={styles.productPrice}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#00000080',
                  width: 35,
                  position: 'absolute',
                  top: 10,
                }}
              />
              <Text style={styles.productOld1}>{oldPrice[0]}</Text>
              <Text style={styles.productOld2}>.{oldPrice[1]}</Text>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>-{data.percentage}%</Text>
              </View>
            </View>
          </View>
          {openQuantity ? (
            <View style={styles.increamentContainer}>
              <TouchableOpacity style={styles.increamentItem}>
                <PlusIcon width={10} height={10} />
              </TouchableOpacity>
              <TextInput
                style={styles.inputField}
                value={String(data?.quantity)}
                placeholder="0"
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.increamentItem}>
                <MinusIcon width={10} height={10} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={pressCart} style={styles.productCart1}>
              <CartIcon />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    width: wp('45%'),
    margin: 10,
    position: 'relative',
    // height: hp(20),
  },
  inputField: {
    backgroundColor: WHITE,
    width: 25,
    height: 25,
    fontSize: 15,
    borderRadius: 5,
    padding: 0,
    textAlign: 'center',
  },
  increamentItem: {
    backgroundColor: BLACK,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  },
  operatorIcon: {
    color: WHITE,
    fontSize: 17,
  },
  heartColor: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  colorSelection: {
    width: 20,
    padding: 2,
    borderRadius: 20,
    backgroundColor: '#00000040',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 90,
  },
  colorPalot: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 10,
    marginBottom: 3,
  },
  colorPalot2: {
    width: 15,
    height: 15,
    backgroundColor: '#800080',
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 10,
    marginBottom: 3,
  },
  colorPalot3: {
    width: 15,
    height: 15,
    backgroundColor: '#3EB49C',
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 10,
    marginBottom: 3,
  },
  colorLeft: {
    color: WHITE,
  },
  productImage: {
    width: '100%',
    height: 170,
  },
  productName: {
    margin: 7,
  },
  productFeature: {
    width: '80%',
    // backgroundColor: 'red',
    // flexDirection: 'row',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'relative',
  },
  productCart: {
    width: wp('20%'),
    // margin: hp('-25%'),
  },
  productCurrent1: {
    color: '#EF0303',
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '600',
  },
  productCurrent2: {
    color: '#EF0303',
    fontSize: 12,
    marginLeft: 5,
    fontWeight: '600',
  },
  productOld1: {
    fontSize: 15,
    // marginLeft: 5,
    fontWeight: '600',
  },
  productOld2: {
    fontSize: 12,
    // marginLeft: 5,
    fontWeight: '600',
  },
  labelContainer: {
    paddingVertical: 1,
    paddingHorizontal: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#EF0303',
  },
  labelText: {
    color: WHITE,
    fontSize: 13,
    fontWeight: '600',
  },
  productCart1: {
    width: wp(10),
  },
  increamentContainer: {
    width: wp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProductCard;
