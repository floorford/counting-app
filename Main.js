// importing react, react native components and redux
import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

// importing my other components
import Counter from './containers/Counter';
import Reseter from './containers/Reseter';
import Scroller from './containers/Scroller';

const source = require('./assets/count.jpg');

const Main = () => (
  <View style={styles.container}>
    <Text style={ styles.title }>The Count</Text>
    <Image source={ source } style={ styles.image }/>
    <Counter />
    <Reseter />
    <Scroller/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40
  },
  title: {
    color: '#5a2961',
    fontWeight: 'bold',
    fontSize: 36,
  },
  image: {
    alignContent: 'center',
    marginVertical: 5
  },
});

export default Main;
