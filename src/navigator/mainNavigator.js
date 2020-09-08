import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial99158Navigator from '../features/Tutorial99158/navigator';
import NotificationList99130Navigator from '../features/NotificationList99130/navigator';
import Settings99129Navigator from '../features/Settings99129/navigator';
import Settings99121Navigator from '../features/Settings99121/navigator';
import UserProfile99119Navigator from '../features/UserProfile99119/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial99158: { screen: Tutorial99158Navigator },
NotificationList99130: { screen: NotificationList99130Navigator },
Settings99129: { screen: Settings99129Navigator },
Settings99121: { screen: Settings99121Navigator },
UserProfile99119: { screen: UserProfile99119Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
