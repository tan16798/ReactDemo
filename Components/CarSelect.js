import React ,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
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
            data:[]
            
        }
        var newArray = [];
      
    }
    render(){
        return(  
        <View style={{width:200}}>
            <SearchableDropdown
            //items={this.state.data}
            items={this.state.data}
            onItemSelect={(item)=>{this.setState({selectedItem:item});console.log(this.state.selectedItem)}}
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
            onTextChange={text=>{console.log(text)}}
            />
        </View>
        
        );
    }
    componentDidMount(){
        this.getdata().then((output) =>{
          console.log(output);
          //map data recieve into id , name key the dropdown just show the name key
          newArray = output.map((item)=>{
            return {
                "id": item.id,
                "name": item.make.concat(" ",item.model),
                
            }
        });
        this.setState({
          data:newArray
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
          return responeJson;
        } catch (error) {
          console.error(error);
        }
      }
}