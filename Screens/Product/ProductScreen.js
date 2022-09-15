import React from 'react';
import {View, Text} from 'react-native';
import MainHeader from '../../Components/MainHeader';
import {useSelector} from 'react-redux';
const ProductScreen = props => {
  const allCategories = useSelector(state => state.product.allCategories);

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />
      <Text>Product Screen</Text>
    </View>
  );
};
export default ProductScreen;
