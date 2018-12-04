import * as React from 'react'
import { createRootNavigator } from "./src/routing";
import { isSignedIn } from './src/auth'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false
        };
    }

    componentDidMount() {
        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(err => alert("Error Authentification"));
    }

    render() {
        debugger;
        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn) {
            return null;
        }

        const Layout = createRootNavigator(signedIn);
        return <Layout />;
    }
}
