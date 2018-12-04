import * as React from 'react'
import App from './App';
import {Provider} from 'mobx-react'
import storeExp from './src/components/stores/storeArt'

export default class AppMobX extends React.Component {
    render() {
        return (
            <Provider store = {new storeExp}>
            <App />
            </Provider>
        );
    }
}
