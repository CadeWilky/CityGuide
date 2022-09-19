import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, FlatList, } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';


import data from './attractions.json';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000)

const icon = require('./images/chicago.png');

export default class App extends React.Component {

  renderRow({item}) {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.names}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={styles.modifiedURL}>{item.modifiedURL}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>City Guide</Text>
        <FlatList data={data} renderItem={this.renderRow} /> 
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EDE2E0',
  },
  title: {
    backgroundColor: '#1C7DA5',
    color: '#EDE2E0',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#7B7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#1F3243',
    borderColor: '#1F3243',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  icon: {
    height: 45,
    width: 45,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  names: {
    color: '#122737',
    fontSize:18,
  },
  address: {
    color: '#3C4F62',
    fontSize: 16,
  },
  modifiedURL: {
    color: '#3C4F62',
    fontSize: 16,
    fontStyle:'italic',
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
