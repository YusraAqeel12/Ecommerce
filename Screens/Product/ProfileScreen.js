import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import MainHeader from '../../Components/MainHeader';
import {useSelector, useDispatch} from 'react-redux';
import * as ApiAction from '../../Store/Action/ProductAction';

const ProfileScreen = props => {
  const allCategories = useSelector(state => state.product.allCategories);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />
      <Text>Profile Screen</Text>
      <TextInput
        placeholder="Enter emial"
        onChangeText={text => {
          setEmail(text);
        }}
      />

      <TextInput
        placeholder="Enter password"
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <Button
        title="SIGN UP"
        onPress={() => {
          dispatch(ApiAction.userSignUpAction(email,password));
        }}
      />
    </View>
  );
};
export default ProfileScreen;
