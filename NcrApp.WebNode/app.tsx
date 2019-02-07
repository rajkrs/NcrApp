
'use strict'
import 'semantic-ui/dist/semantic.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from './src/app/login/component/Login';
import Error404 from './src/app/Error/components/404';

function App() {
    return (
        <BrowserRouter >
            <div className="login-wrapperBlue">
                <Switch>
                    <Route path="/login" component={LoginForm} exact />
                    <Route path="/error/404" component={Error404} exact />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </BrowserRouter >
    );
}

ReactDOM.render(
    <App/>
    , document.querySelector('#root')
)
