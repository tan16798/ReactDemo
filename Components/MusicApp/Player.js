import {View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Header from './Header'
import AlbumCover from './AlbumCover'
import Detail from './Detail'
import PlayBar from './PlayBar'
import Control from './Control'
import Video from 'react-native-video'
var test={uri:{uri:'http://srv2.dnupload.com/Music/Album/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20(320)/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20128/05%20Love%20Yourself.mp3'
},
require:require("../image/SimpleLoveWnRemix-Obito-6098497.mp3")

}
export default class Player extends Component{
    constructor(props){
        super(props)
        this.state={
            paused:true,
            repeat:false,
            suffle:false,
            tracklength:1,
            currentTime:0,
            isChanging:false,
            selectTrack:0
        }
    }
    move(time){
        this.setState({currentTime:Math.round(time),
                       paused:false                         });
        this.refs.player.seek(Math.round(time));
    }
    next(){
        if(this.state.selectTrack < this.props.playlist.length-1){
            this.refs.player.seek(0)
            this.setState({isChanging:true});
            setTimeout(()=>{
                this.setState({
                    paused:true,
                    currentTime:0,
                    tracklength:1,
                    selectTrack:this.state.selectTrack+1
                },0)
            })

        }
    }
    previous(){
        if(this.state.currentTime<10 && this.state.selectTrack>0){
            this.refs.player.seek(0)
            this.setState({isChanging:true});
            setTimeout(()=>{
                this.setState({
                    paused:true,
                    currentTime:0,
                    tracklength:1,
                    selectTrack:this.state.selectTrack-1
                },0)
            })
        }
        else {
            this.refs.player.seek(0)
            this.setState({currentTime:0});
        }
    }
    render(){
        return(
            this.state.isChanging?null:
            <View style={styles.container}> 
                <Video source={test.require}
                ref='player'
                  onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onEnd={this.onEnd}                      // Callback when playback finishes
       onError={this.videoError} 
       paused={this.state.paused}
       repeat={this.state.repeat}
       onLoad={(data)=>{this.setState({tracklength:Math.floor(data.duration)});console.log(data.duration)}}
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
                        onPressRepeat={()=>{this.setState({repeat:!this.state.repeat})}}
                        onPressPlay={()=>{this.setState({paused:!this.state.paused})}}
                        onPressNext={this.next.bind(this)}
                        onPressPrevious={this.previous.bind(this)}
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