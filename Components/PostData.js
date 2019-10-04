
import {View,Text,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import { TextInput } from 'react-native-gesture-handler';
export default class PostData extends Component {
  constructor(props){
    super(props);
    this.state={
      customerid :"",
      cusinput:"",
      result:[]
    }
  }
  render() {
    return(
      <View style={{flex:1}}>
         <TextInput style={{flex:1,borderColor:'red',borderWidth:1}}
                    onChangeText={(cusinput)=>{this.setState({cusinput})}}
                    value={this.state.cusinput}
         />
         <View style={{flex:2}}>
           <TouchableOpacity onPress={()=>{this.componentDidMount()}}>
             <View style={{width:50,height:50,backgroundColor:'black',borderWidth:1}}>
               <Text style={{color:'white'}}>submit</Text>
             </View>
           </TouchableOpacity>
         </View>
         <View style={{flex:1}}><Text>{this.state.result}</Text></View>
         </View>
         
    );
  }
  componentDidMount(){
  console.log("yess1")
  this.postdata2().then((output2) =>{
    console.log(this.postdata2());
  this.setState({
    result:output2
  });
  console.log(this.state.result);
});
  }
  
  async postdata2(){
    console.log(this.state.cusinput.toString())
    const url ='http://192.168.1.51:8080/todo'
    try {
      let respone = await fetch(url,{
        method : 'POST',
        headers: {
          Accept: 'application/json' ,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "cust_id": this.state.cusinput
        }),
      });
      console.log(this.state.cusinput)
      let responeJson = await respone.json();
      console.log(responeJson);
      return responeJson.grade;
    } catch (error) {
      console.error(error);
    }
  }
}


