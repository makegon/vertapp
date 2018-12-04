import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ArticleDetails from './ArticleDetails'
import { ADD_HOME, ADD_DETAILS } from '../routes'

export default createStackNavigator(
    {
        [ADD_HOME]: ArticleDetails,
        [ADD_DETAILS]: HomeScreen
    },
    {
        headerMode: 'none'
    }
)
