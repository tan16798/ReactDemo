import {StyleSheet,View,ImageBackground,Text,TouchableOpacity,Image} from 'react-native';
import React, {Component} from 'react';
export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={require('../image/baseline_arrow_drop_down_white_18dp.png')}/>
                </TouchableOpacity>
                <Text  style={styles.message} >{this.props.message.toUpperCase()}</Text>
                <TouchableOpacity>
                    <Image source={require('../image/baseline_menu_open_white_18dp.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      height: 72,
      paddingTop: 20,
      paddingLeft: 12,
      paddingRight: 12,
      flexDirection: 'row',
    },
    message: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.72)',
        fontWeight: 'bold',
        fontSize: 10,
      },
      button: {
        opacity: 0.72
      }
    });