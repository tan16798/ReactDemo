
import {AppRegistry,View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Stacknav from './Route.js';
import ConNguoi from "./Components/ConNguoi.js";
import GetData from "./Components/GetData.js";
import PostData from "./Components/PostData.js";
import Tabnav from "./Tabbar.js";
import ManhinhA from './Screens/manhinhA.js';
import Stepper from './Components/Stepper.js';
import StepIndi from './Components/StepIndicator';
export default class ReactDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      refreshing:false,
      customerid :"",
      cusinput:"",
      result:[]
    }
  }
  render() {
    return(
   
      <View style={{flex:1,justifyContent:"center"}}>
         <ImageBackground style={{width: '100%' , height: '100%'}} 
      // source={{uri:'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-2_044126655.jpg'}}>
       source={require('./image/background.jpg')}>
         {/* <TouchableOpacity onPress={()=>{console.log(this.refs.mra.state.navigateallow);
                                        this.refs.mra.block();}}>
         <Text>clicktest</Text>
         </TouchableOpacity>
        <ManhinhA ref='mra'/> */}

        {/* <View style={{flex:1}}/>
        <View style={{flex:5,padding:40, borderWidth:0.5,justifyContent:'center'}}>
        <Tabnav />
        </View>
        <View style={{flex:1 }}/> */}

      {/* <Stepper/> */}
        <StepIndi/>
        </ImageBackground>
         </View>
         
         
    );
  }
}



