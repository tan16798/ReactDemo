import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import{createAppContainer} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import ManhinhA from "./Screens/manhinhA";
import ManhinhB from "./Screens/manhinhB";
export const Tabnav = createMaterialTopTabNavigator(
    {
        mhA:{
            screen:ManhinhA,
            navigationOptions:{
              title:'man hinh A'
             
                
            }
        },
        mhB:{
            screen:ManhinhB,
            navigationOptions:{
                title:'man hinh B'
                
            }
        }
    },
   
    {
      initialRouteName:'mhA',
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'mhA') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
              // Sometimes we want to add badges to some icons.
              // You can check the implementation below.
            } else if (routeName === 'mhB') {
              iconName = 'ios-options';
            }
    
            // You can return any component that you like here!
            return <Icon name={iconName} size={15} color={tintColor} />;
          },
          //BLOCK TAB BAR
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (
              navigation.state.params.block===true
              // || navigation.state.routeName === "Third"
            ) {
              return null;
            }
            defaultHandler();
          },
        }),

        tabBarOptions: {
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showIcon:true,
          showLabel:false,
          style: {
            backgroundColor: 'white' // TabBar background
        }
        }},
        
      
);

export default createAppContainer(Tabnav);