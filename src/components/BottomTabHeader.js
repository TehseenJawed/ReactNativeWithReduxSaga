import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {APPCOLOR, WHITE} from '../assets/colors/colors';
import BackIcon from '../assets/icons/navigate_back_icon.svg';
import {globalStyles} from '../styles/globalStyles';
import FilterIcon from '../assets/icons/filter_icon.svg';
import SearchIcon from '../assets/icons/search_icon.svg';

const BottomTabHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <StatusBar
        animated={true}
        backgroundColor={APPCOLOR}
      />
      <View style={styles.navigatorSection}>
        <BackIcon width={25} height={25} />
        <View style={{position: 'relative'}}>
          <TextInput
            placeholder="Search the Market"
            keyboardType="default"
            secureTextEntry={false}
            style={styles.navigatorSearchField}
          />
          <SearchIcon style={styles.inputIcon} width={20} height={20} />
        </View>
        <View style={styles.filterContainer}>
          <FilterIcon width={20} height={20} />
          <Text style={styles.filterLabel}>Filter</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: wp('100%'),
    padding: hp(1),
    // height: 100,
    backgroundColor: APPCOLOR,
    ...globalStyles.boxShadow
  },
  navigatorSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  navigatorSearchField: {
    width: wp('80%'),
    backgroundColor: WHITE,
    height: 37,
    borderRadius: 5,
  },
  inputIcon: {
    position: 'absolute',
    right: wp(4),
    top: hp(1),
  },
  filterLabel: {
    color: WHITE,
    fontSize: wp(3),
  },
  filterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    paddingHorizontal: wp(7),
    height: hp(6),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default BottomTabHeader;
