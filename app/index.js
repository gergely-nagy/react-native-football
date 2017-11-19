import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback  } from 'react-native';
import Scoreboard from './components/Scoreboard';

export default class Football extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      standby: false,
      best: 10,
    };
  }

  addScore = () => {
    let newScore = this.state.score + 1;
    if (this.state.score === 10){
      this.setState({ score: 0, standby: true });
    } else {
      this.setState({ score: newScore, standby: false })
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.addScore}>
        <View style={styles.container}>
          <Scoreboard
            score={this.state.score}
            standby={this.state.standby}
            best={this.state.best}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
