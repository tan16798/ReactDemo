import React  from 'react';
import {StyleSheet, Image, View,TouchableOpacity} from 'react-native';
export default class Control extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pause:true,
            repeat:false,
            suffle:false
        }
    }
    playpress(){
        this.setState({
            pause:!this.state.pause
        })
    }
    repeatpress(){
        this.setState({
            repeat:!this.state.repeat
        })
    }
    sufflepress(){
        this.setState({
            suffle:!this.state.suffle
        })
    }

    render(){
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{this.sufflepress()}}>
                <View style={styles.buttoncontrol}>
                    <Image style={[styles.extracontrol,this.state.suffle?[]:styles.off]} source={require('../image/suffle.png')}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.buttoncontrol}>
                    <Image source={require('../image/previous.png')}></Image>
                </View>
            </TouchableOpacity>
            {this.state.pause ? 
            <TouchableOpacity onPress={()=>{this.playpress()}}>
                <View style={styles.play}>
                    <Image source={require('../image/play.png')}></Image>
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity  onPress={()=>{this.playpress()}}>
                <View style={styles.play}>
                    <Image source={require('../image/pause.png')}></Image>
                </View>
            </TouchableOpacity>}
            <TouchableOpacity>
                <View style={styles.buttoncontrol}>
                    <Image source={require('../image/next.png')}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.repeatpress()}}>
                <View style={styles.buttoncontrol}>
                    <Image style={[styles.extracontrol,this.state.repeat?[]:styles.off]} source={require('../image/repeat.png')}></Image>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
     
    },
    play: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      extracontrol: {
        height: 18,
        width: 18,
      },
      off: {
        opacity: 0.30,
      },
      buttoncontrol:{
         
          justifyContent:"center",
          alignItems:'center',
          width:60,
          height:60
          
      }
});