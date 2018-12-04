import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ArticleDetails from './ArticleDetails';
import ArticleEdit from './ArticleEdit';
import { APP_HOME, ARTICLE_DETAILS, ARTICLE_EDIT } from '../routes';
export default createStackNavigator({
    [APP_HOME]: HomeScreen,
    [ARTICLE_DETAILS]: ArticleDetails,
    [ARTICLE_EDIT]: ArticleEdit
}, {
    headerMode: 'none'
});
