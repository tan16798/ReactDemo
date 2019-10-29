import {AppRegistry,View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import Player from './Components/MusicApp/Player'
export default class AppMusic extends Component{
    render(){
        return(
            <View style={styles.container} >
              <Player></Player>
            </View>
        );
    }
}
const styles = {
    container: {
      flex: 1,
      backgroundColor: 'rgb(4,4,4)',
      
    },
    
  }