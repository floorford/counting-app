import React, { Component } from "react";

import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { count, onPlus, onSubtract } = this.props;
    count === 10 ? (disabled2 = true, color2 = 'lightgrey') : (disabled2 = false, color2 = '#5a2961');
    count === 0 ? (disabled1 = true,  color1 = 'lightgrey') : (disabled1 = false, color1 = '#5a2961');

    const buttonColStyle1 = {
      backgroundColor: color1,
      borderColor: color1,
    }

    const buttonColStyle2 = {
      backgroundColor: color2,
      borderColor: color2,
    }

    return (
      <View style={ styles.buttonSet }>
        <TouchableHighlight style={ [styles.buttons, buttonColStyle1] } onPress={ onSubtract } underlayColor='#825f87' disabled={ disabled1 }>
          <Text style={ styles.buttonText }>
            -
          </Text>
        </TouchableHighlight>
        <Text style={ styles.answer }>
          { count }
        </Text>
        <TouchableHighlight style={ [styles.buttons, buttonColStyle2] } onPress={ onPlus } underlayColor='#825f87'  disabled={ disabled2 }>
          <Text style={ styles.buttonText }>
            +
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonSet: {
  flexDirection: 'row',
  marginVertical: 5
  },
  buttons: {
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  answer: {
    color: '#5a2961',
    fontSize: 30,
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight:15,
  },
});
