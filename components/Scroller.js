import React, { Component } from "react";

import { StyleSheet, Text, ScrollView } from 'react-native';

export default class Scroller extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { history } = this.props;

    return (
      <ScrollView>
        <Text style={ styles.history }>History</Text>
        { history.map((item, i) =>
          <Text style={ styles.historyText } key={ i }>
            { item }
          </Text>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
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
