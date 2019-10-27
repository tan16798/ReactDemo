import {StyleSheet,View,Dimensions,Text,TouchableOpacity,Image} from 'react-native';
import React, {Component} from 'react';
export default class Detail extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={{opacity:0.5}}
                    source={require('../image/baseline_playlist_add_white_18dp.png')}/>
                </TouchableOpacity>
                <View style={styles.detailsWrapper}>
                    <Text style={styles.title} >{this.props.title}</Text>
                    <Text style={styles.artist}>{this.props.artist}</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{opacity:0.5}}
                    source={require('../image/baseline_more_horiz_white_18dp.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles =StyleSheet.create({
    container:{
        paddingTop:24,
        flexDirection:'row',
        paddingLeft:20,
        alignItems:'center',
        paddingRight:20
    },
    detailsWrapper:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      },
      artist: {
        color: 'rgba(255, 255, 255, 0.72)',
        fontSize: 12,
        marginTop: 4,
      },
})