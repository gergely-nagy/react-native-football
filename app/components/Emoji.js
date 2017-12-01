import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { PropTypes } from 'prop-types';

const happy = ['👋', '👌', '👍', '👏', '👐'];
const sad = ['😢', '😓', '😒', '😳', '😭'];
const INITIAL_Y = 5;

class Emoji extends Component {

  constructor(props) {
    super(props);

    this.state = {
      relativeY: new Animated.Value(INITIAL_Y),
      fadeAnim: new Animated.Value(0),
      emoji: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      emoji: this.getRandomEmoji(false),
      y: nextProps.y,
      x: nextProps.x - 50
    });

    this.state.relativeY.setValue(INITIAL_Y);

    Animated.timing(
      this.state.fadeAnim,
      { toValue: 1 }
    ).start();

    Animated.timing(
      this.state.relativeY,
      { toValue: 120 }
    ).start();
  }

  getRandomEmoji (isHappy) {
    if (isHappy) {
      const random = Math.floor(Math.random() * (happy.length)) + 0;
      console.log(random);
      return happy[random];
    } else {
      const random = Math.floor(Math.random() * (sad.length)) + 0;
      return sad[random];
    }
  }

  render() {
    return (
      <View
        pointerEvents="none"
        style={[styles.emojiContainer, {
          bottom: this.state.y,
          width: 100,
          height: 200,
          left: this.state.x,
        }]}
      >
        <Animated.Text style={[{
          fontSize: 35,
          backgroundColor: 'transparent',
          opacity: this.state.fadeAnim,
          marginBottom: this.state.relativeY,
        }]}
        >
          {this.state.emoji}
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emojiContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

Emoji.defaultProps = {
  x: 0,
  y: 0,
  scored: null
};

Emoji.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  scored: PropTypes.bool
};

export default Emoji;
