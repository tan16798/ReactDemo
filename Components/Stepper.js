import React,{Component} from 'react';
import {View,Text}from 'react-native';
import {ProgressStep,ProgressSteps} from 'react-native-progress-steps';
import ManhhinhA from '../Screens/manhinhA.js';
import ManhhinhB from '../Screens/manhinhB.js';
import App from '../Route.js';
import Tabnav from "../Tabbar";
const buttonTextStyle = {
    color: '#393939'
};
export default class Stepper extends Component{
render(){
return (
    <View style={{flex: 1}}>
        <ProgressSteps>
            <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                <View style={{ justifyContent:'center' , flex:1 }}>
                    <Tabnav></Tabnav>
                </View>
            </ProgressStep>
            <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                <View style={{ justifyContent:'center' , flex:1 }}>
                    <Text>hahda</Text>
                </View>
            </ProgressStep>
        </ProgressSteps>
    </View>
);
}
}