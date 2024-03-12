import React from 'react';
import { SafeAreaView, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import style from '../App.module.css';
import { StatusBar } from 'expo-status-bar';
import logo from '../img/logo.png'
import { Image } from 'expo-image';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';



export default function Auth({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#000"
     barStyle="light-content" />
      {/* <Button
        title={'Start Recording'}
        onPress={startRecording}style={style.bookbtntext}>
      /> */}
      <SafeAreaView style={style.container} >
      <ScrollView style={style.scroll}>
        <View style={style.display_flex} >
        <Image style={style.logo} source={logo} />
        <Text  style={style.text_login1} >
          Вход
          </Text>

          {/* <TextInput style={style.input} placeholder="Имя" /> */}
          {/* <TextInput style={style.input} placeholder="Имя" /> */}
          <TextInput style={style.input} placeholder="Введите вашу почту" />
          <Text style={style.text_login2}>
            Мы пришлём код вам на почту
          </Text>
          <View style={style.button} >
          <Button
          onPress={() =>
            navigation.navigate('Menu')
          }
           style={style.text_login} title="Войти" />
        
        </View>
          
        </View>
        </ScrollView>
      </SafeAreaView>
  
    </>
  );
}