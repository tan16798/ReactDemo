import {AppRegistry,View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

import Player from './Components/MusicApp/Player'
var Track=[
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://dl.fazmusics.in/Ali/music/aban/hot%20100%20.7%20nov%202015(128)/Twenty%20One%20Pilots%20-%20Stressed%20Out.mp3",
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'http://srv2.dnupload.com/Music/Album/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20(320)/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20128/05%20Love%20Yourself.mp3',
  },
  {
    title: 'Co Tham khong ve',
    artist: 'Bill',
    albumArtUrl: "",
    audioUrl: "../image/CoThamKhongVe-PhatHoJokesBiiThien-6067247,mp3",
  },
  {
    title: 'Simple Love',
    artist: 'Obito',
    albumArtUrl: "",
    audioUrl: '../image/SimpleLoveWnRemix-Obito-6098497.mp3',
  },
]
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