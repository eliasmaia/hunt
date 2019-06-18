import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';

const RootStack =  createStackNavigator({
  Main
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
