import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Scoreboard from './components/Scoreboard';
import Emoji from './components/Emoji';

const EMOJI_Y = Dimensions.get('window').height - 300;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
    if (this.state.score === 10) {
      this.setState({ score: 0, standby: true });
    } else {
      this.setState({ score: newScore, standby: false });
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
          <Emoji
            y={EMOJI_Y}
            score={this.state.score}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
