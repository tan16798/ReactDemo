import {StyleSheet,View,Dimensions,Text,TouchableOpacity,Image} from 'react-native';
import React, {Component} from 'react';
export default class AlbumCover extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri:this.props.url}}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    image: {
      width: Dimensions.get('window').width-48,
      height: Dimensions.get('window').width-48,
    },
  })