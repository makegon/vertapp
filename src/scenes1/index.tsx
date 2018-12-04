import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ArticleDetails from './ArticleDetails'
import {LOGIN_HOME, REG_TAB} from '../routes'

export default createStackNavigator(
    {
        [LOGIN_HOME]: ArticleDetails,
        [REG_TAB]: HomeScreen
    },
    {
        headerMode: 'none'
    }
)
