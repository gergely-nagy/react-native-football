import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

class Scoreboard extends Component {
  render() {
    return (
      <View style={[styles.scoreContainer, { top: 100, width: Dimensions.get('window').width }]}>
        <Text style={[{
          flex: 1,
          fontSize: 30,
          fontWeight: '100',
          color: '#707070'
        }]}
        >
          {this.props.standby ? 'Current best' : ' '}
        </Text>
        <Text style={[{
          flex: 1,
          fontSize: 130,
          fontWeight: '100',
          color: this.props.standby ? '#3b5998' : '#707070',
        }]}
        >
          {this.props.standby ? this.props.best : this.props.score }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scoreContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Scoreboard;
