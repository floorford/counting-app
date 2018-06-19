import React, { Component } from "react";

import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onPress(e);
  }
  // count={ count } onPlus={ e => this.handleChange(1) } onSubtract={ e => this.handleChange(-1) }

  render() {

    const { count } = this.props;
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
        <TouchableHighlight style={ [styles.buttons, buttonColStyle1] } onPress={ e => this.handleChange(-1) } underlayColor='#825f87' disabled={ disabled1 }>
          <Text style={ styles.buttonText }>
            -
          </Text>
        </TouchableHighlight>
        <Text style={ styles.answer }>
          { count }
        </Text>
        <TouchableHighlight style={ [styles.buttons, buttonColStyle2] } onPress={ e => this.handleChange(1) } underlayColor='#825f87'  disabled={ disabled2 }>
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
    marginVertical: 5,
  },
  buttons: {
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: 50,
    justifyContent: 'center',
    backgroundColor: '#5a2961',
    borderColor: '#5a2961',
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

export default Counter;
