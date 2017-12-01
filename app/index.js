import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Scoreboard from './components/Scoreboard';
import Emoji from './components/Emoji';
import Ball from './components/Ball';

// physical variables
const gravity = 0.6; // gravity
const radius = 48; // ball radius
const rotationFactor = 10; // ball rotation factor

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
      x: Dimensions.get('window').width / 2 - radius,
      y: 11,
      emoji_x: 0,
      emoji_y: 0,
      score: 0,
      miss: 0,
      standby: false,
      best: 10,
      rotate: 0,
      scale: 1
    };
  }

  addScore = (evt) => {
    let newScore = this.state.score + 1;
    if (this.state.score === 10) {
      this.setState({ score: 0, standby: true, emoji_y: Dimensions.get('window').height - evt.nativeEvent.locationY - 100, emoji_x: evt.nativeEvent.locationX });
    } else {
      this.setState({ score: newScore, standby: false, emoji_y: Dimensions.get('window').height - evt.nativeEvent.locationY - 100, emoji_x: evt.nativeEvent.locationX});
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={e => this.addScore(e)}>
        <View style={styles.container}>
          <Scoreboard
            score={this.state.score}
            standby={this.state.standby}
            best={this.state.best}
          />
          <Ball
             x={this.state.x}
             y={this.state.y}
             radius={radius}
             rotate={this.state.rotate}
             scale={this.state.scale}
          />
          <Emoji
            x={this.state.emoji_x}
            y={this.state.emoji_y}
            score={this.state.score}
            miss={this.state.miss}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
