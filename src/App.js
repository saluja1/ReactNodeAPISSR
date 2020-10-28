import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LaunchData from './View/LaunchData.jsx';

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LaunchData} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;