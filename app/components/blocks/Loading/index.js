import React, { PureComponent } from 'react';
import { View, Animated, Easing } from 'react-native';
import styles from './styles';


export default class Pulse extends PureComponent {
  constructor(props) {
    super(props);

    this.anim = new Animated.Value(0);
  }

  componentDidMount() {
    setInterval(() => {
      Animated.timing(this.anim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.in,
      })
        .start();
    }, 100);
  }

  render() {
    return (
      <View style={styles.circleWrapper}>
        <Animated.View
          style={[styles.circle, {
            width: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [3, 200],
            }),
            height: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [3, 200],
            }),
            borderRadius: 200 / 2,
            opacity: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          }]}
        />
      </View>
    );
  }
}

