
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import {MainPage} from "./pages/MainPage";
import {ResourcesPage} from "./pages/ResourcesPage";
import {FiveComponentsPage} from './pages/FiveComponentsPage';
import {SpeedTestPage} from './pages/SpeedTestPage';
import {FuturePage} from './pages/FuturePage';
import {SOTAPage} from './pages/SOTAPage';
// import { setCustomText } from 'react-native-global-props';

const MainNavigator = createDrawerNavigator( 
  {
    MainPage: {
      navigationOptions: {
        drawerLabel: "Main"
      },
      screen: MainPage 
    },

    FiveComponentsPage: {
      navigationOptions: {
        drawerLabel: "5 Components of 5G"
      },
      screen: FiveComponentsPage
    },

    SOTAPage:{
      navigationOptions: {
        drawerLabel: "State of the Art"
      },
      screen: SOTAPage
    },

    FuturePage: {
      navigationOptions: {
        drawerLabel: "Future of 5G"
      },
      screen: FuturePage
    },
    
    SpeedTestPage: {
      navigationOptions: {
        drawerLabel: "Speed Test"
      },
      screen: SpeedTestPage
    },

    ResourcesPage: {
      navigationOptions: {
        drawerLabel: "Extra Resources"
      },
      screen: ResourcesPage
    },

  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;
