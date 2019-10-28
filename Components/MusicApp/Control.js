import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
export default class Control{
    constructor(props){
        super(props)
        this.state={
            pause:true
        }
    }
    render(){
        <View>
            <TouchableOpacity>
                <View>
                    <Image></Image>
                </View>
            </TouchableOpacity>
            {this.state.pause ? 
            <TouchableOpacity>
                <View>
                    <Image></Image>
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity>
                <View>
                    <Image></Image>
                </View>
            </TouchableOpacity>}
            <TouchableOpacity>
                <View>
                    <Image></Image>
                </View>
            </TouchableOpacity>

        </View>
    }
}