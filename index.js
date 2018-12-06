/** @format */

import {AppRegistry, Navigator} from 'react-native';
import AppMobX from './AppMobX';
//import AppMobX from './src/scenes1/ArticleDetails';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => {return AppMobX})
