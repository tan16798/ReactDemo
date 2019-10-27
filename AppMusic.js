import {AppRegistry,View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Header from './Components/MusicApp/Header'
import AlbumCover from './Components/MusicApp/AlbumCover'
import Detail from './Components/MusicApp/Detail'
import PlayBar from './Components/MusicApp/PlayBar'
export default class AppMusic extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header message ='Playing the music'/>
                <AlbumCover url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg"/>
                <Detail title='Simple love' artist='Obito'/>
                <PlayBar/>
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