import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BLACK, WHITE} from '../assets/colors/colors';
import Cross from '../assets/icons/crose.svg';
import DetailsIcon from '../assets/icons/grayIcon.svg';
import HeartNull from '../assets/icons/heart_null.svg';
import Button from './Button';

const CustomModal = ({modalProps}) => {
  const [modalOpen, setModalOpen] = modalProps;
  const [size, setSize] = useState('S');
  const [color, setColor] = useState('#CEBFB8');
  const imageArray = ['../assets/images/girl_modal_p1.png'];
  console.log('44444', modalOpen?.product);
  const renderImagesJSX = data => {
    let imgSource = null;
    if (!!data?.item?.uri) {
      imgSource = data.item.uri;
    }
    return <Image style={styles.productImage} source={imgSource} />;
  };
  const currentPrice = modalOpen?.product?.currentPrice?.split('.') || [];
  // const oldPrice = modalOpen?.product?.oldPrice.split('.');
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen?.flag}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalOpen({flag: !modalOpen?.flag, product: {}});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalEmpty}></View>
          <View style={styles.modalWhite}>
            <View style={styles.modalInnterContainer}>
              <Text style={styles.modalHeaderText}>
                Choose the color and size.
              </Text>
              <Pressable
                onPress={() => setModalOpen({flag: false, product: {}})}
                style={styles.cross}>
                <Cross />
              </Pressable>
            </View>

            <View>
              <FlatList
                data={modalOpen?.product?.images}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderImagesJSX}
              />
            </View>

            <View style={styles.productTitleContainer}>
              <View>
                <Text style={styles.productTitle}>Ladies Midi Gown</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.productCurr}>{modalOpen?.product?.currency}</Text>
                  <View style={styles.currencyContainer}>
                    <Text style={styles.productPrice}>{currentPrice[0]}</Text>
                    <Text style={styles.productDeci}>.{currentPrice[1]}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.productCurr}>Details</Text>
                <DetailsIcon width={18} height={18} />
              </View>
            </View>

            <View style={{...styles.priceContainer, marginTop: 10}}>
              <Text style={styles.featureLabel}>Size:</Text>
              <Text style={styles.featureDetails}>M</Text>
            </View>
            <View style={{...styles.priceContainer, marginTop: 10}}>
              {modalOpen?.product?.availableSizes?.map((v, i) => {
                if (size === v) {
                  return (
                    <View style={styles.sizeContainerSelected}>
                      <Text style={styles.sizeLabelSelected}>{v}</Text>
                    </View>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      onPress={() => setSize(v)}
                      style={styles.sizeContainer}>
                      <Text style={styles.sizeLabel}>{v}</Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </View>

            <View style={{...styles.priceContainer, marginTop: 5}}>
              <Text style={styles.featureLabel}>Color:</Text>
              <Text style={styles.featureDetails}>Black</Text>
            </View>
            <View style={{...styles.priceContainer, marginTop: 5}}>
              {modalOpen?.product?.availableColors?.map((v, i) => {
                if (color === v) {
                  return (
                    <View style={styles.palateBorderSelected}>
                      <View
                        style={{
                          ...styles.colorPalateSelected,
                          backgroundColor: v,
                        }}
                      />
                    </View>
                  );
                } else {
                  return (
                    <TouchableOpacity onPress={() => setColor(v)} style={styles.palateBorder}>
                      <View
                        style={{...styles.colorPalate, backgroundColor: v}}
                      />
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
            <View style={styles.addToCartContainer}>
              <HeartNull width={30} height={30} />
              <Button
                buttonStyle={styles.addToCartStyle}
                textStyle={styles.addToCartText}
                title={'ADD TO CART'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#00000080',
  },
  productImage: {
    width: 185,
    height: 185,
    marginRight: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalEmpty: {
    width: '100%',
    height: hp('25%'),
  },
  modalWhite: {
    width: '100%',
    height: hp('77%'),
    backgroundColor: WHITE,
    paddingHorizontal: 15,
  },
  modalInnterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeaderText: {
    fontSize: 16,
    marginTop: 10,
    color: BLACK,
  },
  cross: {
    marginTop: 5,
  },
  productTitle: {
    fontSize: 22,
    color: BLACK,
    fontWeight: '600',
  },
  productTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productCurr: {
    color: BLACK,
    fontSize: 17,
  },
  productPrice: {
    fontSize: 25,
    color: BLACK,
    fontWeight: '600',
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 5,
  },
  productDeci: {
    fontSize: 20,
    color: BLACK,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    height: 50,
    width: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  featureLabel: {
    fontSize: 17,
    color: BLACK,
  },
  featureDetails: {
    fontSize: 16,
    fontWeight: '600',
    color: BLACK,
    marginLeft: 5,
  },
  sizeContainer: {
    paddingHorizontal: 12,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4E4E4',
    marginRight: 10,
  },
  sizeContainerSelected: {
    paddingHorizontal: 12,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: BLACK,
    marginRight: 10,
  },
  sizeLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#737373',
  },
  sizeLabelSelected: {
    fontSize: 18,
    fontWeight: '600',
    color: BLACK,
  },
  colorPalate: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  colorPalateSelected: {
    width: 33,
    height: 33,
    borderRadius: 20,
  },
  palateBorderSelected: {
    backgroundColor: WHITE,
    width: 45,
    height: 45,
    borderRadius: 30,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: BLACK,
    borderWidth: 3,
  },
  palateBorder: {
    backgroundColor: WHITE,
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: BLACK,
    borderWidth: 3,
  },
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: hp(2),
    alignItems: 'center',
  },
  addToCartStyle: {
    width: wp('70%'),
    backgroundColor: BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
  },
  addToCartText: {
    color: WHITE,
    fontSize: 18,
  },
});
export default CustomModal;
