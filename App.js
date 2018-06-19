import React from 'react';

import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

import moment from 'moment';

import Counter from './Counter';
import Reseter from './Reseter';

const source = require('./assets/count.jpg');

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      history: [],
    }

    this.handleResetCounter = this.handleResetCounter.bind(this);
    this.handleResetHistory = this.handleResetHistory.bind(this);

  }

  handleChange(amount) {
    let max = 10;
    let newValue = this.state.count + amount;
    let change;

    amount === 1 ? change = "Incremented" : change = "Decremented"

    let sentence = `${moment().calendar()}: ${change} from ${this.state.count} to ${newValue}`

    if (newValue >= 0 && newValue <= max) {
      count = newValue
      this.setState({
        count: count,
        history: this.state.history.concat(sentence)
      });
    }
  }

  handleResetCounter() {
    this.setState ({
      count: 0,
    })
  }

  handleResetHistory() {
    this.setState ({
      history: [],
    })
  }

  render() {

    const { count, history } = this.state;

    return (
      <View style={styles.container}>
        <Text style={ styles.title }>The Count</Text>
        <Image source={ source } style={ styles.image }/>
        <Counter count={ count } onPlus={ e => this.handleChange(1) } onSubtract={ e => this.handleChange(-1) }/>
        <Reseter onResetHistory={ this.handleResetHistory } onResetCounter={ this.handleResetCounter }/>
        <ScrollView>
          <Text style={ styles.history }>History</Text>
          { history.map((item, i) =>
            <Text style={ styles.historyText } key={ i }>
              { item }
            </Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

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
  history: {
    color: '#5a2961',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center'
  },
  historyText: {
    fontSize: 15,
    textAlign: 'center'
  }
});
