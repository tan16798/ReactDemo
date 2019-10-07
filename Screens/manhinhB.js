import React,{Component} from "react";
import {View, Text,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
export default class ManhinhB extends Component{
  constructor(props){
    super(props)
    // props.navigation.setParams({
    //   block: true
    // });
  }
  render(){
    return(
      <View style = {{ flex:1, backgroundColor:'blue',opacity:0.5 }}>
        <TouchableOpacity onPress = {()=> this.props.navigation.goBack()}>
        <Icon name="ios-home" color="red" size={25}/>  
      <Text style = {{ color:"black"}}>{this.props.navigation.getParam('thamso', "chua co tham so")}</Text>
      </TouchableOpacity>
      </View>
    )
  }
  
}
