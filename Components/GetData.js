
import {View,Text,FlatList,RefreshControl} from 'react-native';
import React, {Component} from 'react';
export default class GetData extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      refreshing:false,
      
    }
  }
  render() {
    return(
      <View style={{flex:1}}>
        
         <FlatList style ={{flex:1}}
         refreshControl={
           <RefreshControl refreshing={this.state.refreshing} 
           onRefresh={()=>{
            this.setState({refreshing:true});
            this.componentDidMount();
            this.setState({refreshing:false});
           }}
           />
         }
         data ={this.state.data}
          renderItem ={({item})=><View style={{flex:1 ,borderWidth:1}}><Text>{item.title}, {item.releaseYear}</Text></View>}
          keyExtractor={({id}, index) => id}
        >
         </FlatList>
         
         </View>
         
    );
  }
  componentDidMount(){
    this.getdata().then((output) =>{
      console.log(this.getdata());
    this.setState({
      data:output
    });
    console.log(this.state.data);
  });
  }
  async getdata(){
    const url ='https://facebook.github.io/react-native/movies.json'
    try {
      let respone = await fetch(url);
      let responeJson = await respone.json();
      console.log(responeJson);
      return responeJson.movies;
    } catch (error) {
      console.error(error);
    }
  }
}


