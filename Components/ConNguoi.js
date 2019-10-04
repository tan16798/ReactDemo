import React, {Component} from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
export default class ConNguoi extends Component{
constructor(props){
  super(props);
  this.state={
    showtext:true
  };
  var task = () =>{
    this.setState(previousState => {
      return {
        showtext: !previousState.showtext
      };
    });
  };
  const timerefesh =2000;
  setInterval(task,timerefesh);
}
clickme(){
  console.log("Click cmm");
}
  render(){
   let displaytext = this.state.showtext ? this.props.inputtext :'';
    return(
      <TouchableOpacity onPress={()=>{this.clickme()}} style={ao.bao}>
      <View >
      <Text>{this.props.hoten}</Text>
      <Text>{displaytext}</Text>
      </View>
      </TouchableOpacity>
    );
  }
}

var ao = StyleSheet.create({
  bao:{flex:1,width:50, backgroundColor:"blue", margin:20}
});
