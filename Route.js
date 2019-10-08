
import{createStackNavigator} from 'react-navigation-stack'
import{createDrawerNavigator} from 'react-navigation-drawer'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import{createAppContainer} from 'react-navigation'
import ManhinhA from "./Screens/manhinhA";
import ManhinhB from "./Screens/manhinhB";
export const HomeStack = createStackNavigator(
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
{initialRouteName:'mhA'}
);
const Stacknav = createAppContainer(HomeStack);

export default Stacknav;

