import React,{Component} from "react";
import {View, Text,TouchableOpacity,Picker} from "react-native";
import SelectCar from '../Components/CarSelect.js'
export default class ManhinhA extends Component{
  constructor(props){
    super(props)
    this.state={
      car:"",
      navigateallow:true
    }
    props.navigation.setParams({
      block: true
    });
  }
 

  block(){
    this.setState({
      navigateallow: !this.state.navigateallow
    })
  }
  render(){
    return(
      <View style = {{flex:1, backgroundColor:"white", opacity:0.5,borderColor:'white',borderWidth:3,alignItems:'center'}}>
       <Text style={{right:'30%'}}>My car is:</Text>
        <SelectCar/>
        <TouchableOpacity onPress = {()=> this.props.navigation.navigate('mhB',{thamso:'day la tham so'}>
      <Text style = {{color:"black"}}>An vao de truyen tham so</Text>
      </TouchableOpacity>
      
      </View>
    )
  }
}
