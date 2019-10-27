
import {AppRegistry} from 'react-native';
import React,{Component} from 'react'
import AppDemo from './App'
import AppMusic from './AppMusic'
import {Provider} from 'react-redux'
import store from './Redux/store/index'
export default class ReactDemo extends Component{
    render(){
        return (
        <Provider store={store}>
        {/* <AppDemo/> */}
            <AppMusic/>
        </Provider>
            );
    }
}
AppRegistry.registerComponent('ReactDemo', () => ReactDemo);
