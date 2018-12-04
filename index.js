/** @format */

import {AppRegistry, Navigator} from 'react-native';
import AppMobX from './AppMobX';
//import Auth from './src/scenes1/HomeScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => {return AppMobX})
