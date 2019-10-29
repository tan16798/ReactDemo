import {View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Header from './Header'
import AlbumCover from './AlbumCover'
import Detail from './Detail'
import PlayBar from './PlayBar'
import Control from './Control'
import Video from 'react-native-video'

export default class Player extends Component{
    constructor(props){
        super(props)
        this.state={
            paused:true,
            repeat:false,
            suffle:false,
            tracklength:1,
            currentTime:0,
        }
    }
    move(time){
        this.setState({currentTime:Math.round(time),
                       paused:false                         });
        this.refs.player.seek(Math.round(time));
    }
    
    render(){
        return(
        
            <View style={styles.container}> 
                <Video source={require('../image/CoThamKhongVe-PhatHoJokesBiiThien-6067247.mp3')}
                ref='player'
                  onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onEnd={this.onEnd}                      // Callback when playback finishes
       onError={this.videoError} 
       paused={this.state.paused}
       onLoad={(data)=>{this.setState({tracklength:Math.floor(data.duration)})}}
       onProgress={(data)=>{this.setState({currentTime:Math.floor(data.currentTime)})}}
                   />
                 <Header message ='Playing the music'/>
                <AlbumCover url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg"/>
                <Detail title='Simple love' artist='Obito'/>
                <PlayBar tracklength={this.state.tracklength}
                         currenttime={this.state.currentTime}
                         slidingcomplete={this.move.bind(this)}
                         slidingstart={()=>{this.setState({paused:true})}}
                />
                <Control pause={this.state.paused} 
                        repeat={this.state.repeat}
                        suffle={this.state.suffle}
                        onPressPlay={()=>{this.setState({paused:!this.state.paused})}}
                /> 
                </View>
            
        );
    }
}
const styles = {
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    video: {
        height:0,
        width:0
    },
    
  }