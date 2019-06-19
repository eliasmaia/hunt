import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from "./pages/product";

const RootStack =  createStackNavigator({
  Main,
  Product
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF"
  },
});

const AppNav = createAppContainer(RootStack);

export default AppNav;
