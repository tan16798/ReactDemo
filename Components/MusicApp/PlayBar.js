
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

export default class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }
  timeeslap(value){
    let minute=Math.floor(value/60).toString().padStart(2,"0");
    let second =(value%60).toString().padStart(2,"0")
    return minute + ":" +second;
  }
  
  render() {
    const {value} = this.state;
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
        <Text style={{color: 'rgba(255, 255, 255, 0.72)',fontSize: 12,textAlign:'left',}}>{this.timeeslap(this.props.currenttime)}</Text>
        </View>
        <View style={{flex:1}}>
        <Text style={{color: 'rgba(255, 255, 255, 0.72)',fontSize: 12,textAlign:'right',}}>{this.timeeslap(this.props.tracklength-this.props.currenttime)}</Text>
        </View>
        </View>
        <Slider style={styles.slider}
          step={1}
          maximumValue={this.props.tracklength}
          onSlidingComplete={this.props.slidingcomplete}
          value={this.props.currenttime}
          onSlidingStart={this.props.slidingstart}
          minimumTrackTintColor='#fff'
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
        thumbTintColor='#fff'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  
  slider: {
    marginTop: 2,
  },
});