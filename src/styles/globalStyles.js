import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PRIMARYCOLOR, SECONDARYCOLOR} from '../assets/colors/colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
  rootContainer: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  innerView: {
    width: wp('90%'),
    alignSelf: 'center',
    alignItems: 'center',
  },
  large: {
    fontSize: wp('6%'),
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  medium: {
    fontSize: wp('4%'),
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    textAlign: 'center',
  },
  imageStyle: {
    width: wp('85%'),
    height: hp('45%'),
  },
  logoStyle: {
    width: wp('35%'),
    height: hp('20%'),
  },
  forgotWidth: {
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputField: {
    width: wp('80%'),
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    paddingLeft: 15,
  },
  headline: {
    fontSize: 20,
    color: 'white',
    fontWeight: '200',
  },
  BackHeaderBG: {
    width: wp('88%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: hp('9%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceHeight: {
    height: hp('2%'),
  },
  small: {
    fontSize: wp('3.5%'),
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    textAlign: 'left',
  },
  btnBg: {
    width: '100%',
    backgroundColor: SECONDARYCOLOR,
    height: hp('6.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  cardContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  cardText: {
    fontSize: wp(6),
    color: 'black',
    fontWeight: '600',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
