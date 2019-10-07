import React ,{Component} from 'react';
import {View,Text,TouchableOpacity,Button} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { TextInput } from 'react-native-gesture-handler';
var items = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'angellist' },
    { id: 2, name: 'codepen' },
    { id: 3, name: 'envelope' },
    { id: 4, name: 'etsy' },
    { id: 5, name: 'facebook' },
    { id: 6, name: 'foursquare' },
    { id: 7, name: 'github-alt' },
    { id: 8, name: 'github' },
    { id: 9, name: 'gitlab' },
    { id: 10,name: 'instagram' },
  ];
  
  
export default class SelectCar extends Component{
        
    constructor(props){
        super(props);
        this.state={
            selectedItem:"",
            data:[],
            showbutton:false,
            text:''
            
        }
        var newArray = [];
      
    }
    render(){
        return(  
        <View style={{width:200}}>
            <SearchableDropdown
            //items={this.state.data}
            items={this.state.data}
            onItemSelect={(item)=>{this.setState({selectedItem:item,showbutton:true,text:''});console.log(this.state.text)}}
            placeholder='Select Car'
            listProps={
                {nestedScrollEnabled:true}
            }
            containerStyle={{marginBot:2}}
            itemStyle={{padding:5,backgroundColor:'red'}}
            itemTextStyle={{color:'black'}}
            itemContainerStyle={{maxHeight:'10%'}}
            textInputStyle={{borderBottomWidth:1}}
            resetValue={false}
            textInputProps={
            {onChangeText:text =>{console.log(text);this.setState({showbutton:false,text})}}
            }

            />
            
            {this.state.showbutton ? 
            <View style={{alignItems:'center',padding:10}}>
              <Text style={{fontFamily:'Frutiger', fontSize:10}}>My car is off-peak registered</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{width:'50%', padding:5}}>
              <Button title='YES' color='white'/>
              </View>
              <View style={{width:'50%', padding:5}}>
              <Button title='NO' color='gray'/>
              </View>
              </View>
              </View>
              :null}
              
        </View>
        
        );
    }
    componentDidMount(){

        this.getdata().then((output) =>{
          console.log(output);
        this.setState({
          data:output
        });
        console.log(this.state.data);
      });
      
      }
      async getdata(){
        const url ='https://uat-motor.dbs-insure.com:8080/dbs-services/repository/make-model-json'
        try {
          let respone = await fetch(url);
          let responeJson = await respone.json();
         // console.log(responeJson);
         //map data recieve into id , name key the dropdown just show the name key
          newArray = responeJson.map((item)=>{
          return {
              "id": item.id,
              "name": item.make.concat(" ",item.model),    
          }
        });
          return newArray;
        } catch (error) {
          console.error(error);
        }
      }
      
}