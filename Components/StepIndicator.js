import React,{Component} from "react";
import {View, Text,TouchableOpacity} from "react-native";
import StepIndicator from 'react-native-step-indicator';
import DbsCar from '../Screens/Dbs-car';
import DbsYear from '../Screens/Dbs-year';
const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
 
 export default class StepIndi extends Component{
 
constructor(props) {
    super(props)
    this.state = {
        currentPosition: 1
    }
}
 
render() {
    
  return (
      <View style={{flex:1}}>
    <StepIndicator
         customStyles={customStyles}
         currentPosition={this.state.currentPosition}
         labels={labels}
         onPress={(position)=>{this.setState({currentPosition: position});}}
    />
    {this.caserender()}
    </View>
  )
}
 
onPageChange(position){
    this.setState({currentPosition: position});
    
}
caserender(){
    switch(this.state.currentPosition){
        case 0:
            return <DbsCar ref='car'/>
        case 1:
            return <DbsYear/>
    }
}
}