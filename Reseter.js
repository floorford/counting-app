import React, { Component } from "react";

import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Reseter extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { onResetCounter, onResetHistory } = this.props;

    return (
      <View style={ styles.buttonSet }>
        <TouchableHighlight style={ styles.reset } onPress={ onResetCounter } underlayColor='#825f87'>
          <Text style={ styles.resetText }>
            Reset Counter
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={ styles.reset } onPress={ onResetHistory } underlayColor='#825f87'>
          <Text style={ styles.resetText }>
            Reset History
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  buttonSet: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  reset: {
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: 150,
    justifyContent: 'center',
    backgroundColor: '#5a2961',
    borderColor: '#5a2961',
    marginLeft: 2,
    marginRight: 2
  },
  resetText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
