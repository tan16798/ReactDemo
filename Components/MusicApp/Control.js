import React  from 'react';
import {StyleSheet, Image, View,TouchableOpacity} from 'react-native';
export default class Control extends React.Component{
    constructor(props){
        super(props)
      
    }
    render(){
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={this.props.onPressSuffle}>
                <View style={styles.buttoncontrol}>
                    <Image style={[styles.extracontrol,this.props.suffle?[]:styles.off]} source={require('../image/suffle.png')}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onPressPrevious}>
                <View style={styles.buttoncontrol}>
                    <Image source={require('../image/previous.png')}></Image>
                </View>
            </TouchableOpacity>
            {this.props.pause ? 
            <TouchableOpacity onPress={this.props.onPressPlay}>
                <View style={styles.play}>
                    <Image source={require('../image/play.png')}></Image>
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity  onPress={this.props.onPressPlay}>
                <View style={styles.play}>
                    <Image source={require('../image/pause.png')}></Image>
                </View>
            </TouchableOpacity>}
            <TouchableOpacity onPress={this.props.onPressNext}>
                <View style={styles.buttoncontrol}>
                    <Image source={require('../image/next.png')}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onPressRepeat}>
                <View style={styles.buttoncontrol}>
                    <Image style={[styles.extracontrol,this.props.repeat?[]:styles.off]} source={require('../image/repeat.png')}></Image>
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