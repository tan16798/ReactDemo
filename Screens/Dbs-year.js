import React,{Component} from "react";
import {View, Text,TouchableOpacity,Picker} from "react-native";
import SelectCar from '../Components/CarSelect.js'
export default class DbsYear extends Component{
  constructor(props){
    super(props)
    this.state={
      car:"",
      
    }
    
  }
 
  render(){
    return(
      <View style = {{flex:1, backgroundColor:"white", opacity:0.5,borderColor:'white',borderWidth:3,alignItems:'center'}}>
       <Text style={{right:'30%'}}>The year of registration is:</Text>
        
      </View>
    )
  }
}
