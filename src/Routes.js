import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './component/Welcome';
const Routes = () => (
    <Switch>
        <Route path="/page1" component={Welcome} />
        <Route path="/users" component={Welcome} exact />
        <Route path="/home/:name" component={Welcome} />
        <Route path="/home/1" render={() => <p>Hello, Welcome to home.</p>} />
        <Route path="/about" render={() => {
            if (localStorage.getItem('user')) {
                return <p>Welcome to about page</p>
            }
            return <Redirect to="/login" />;
        }} />
        <Route path="/contact" render={() => <p>Hello, Welcome to contact page.</p>} />
        <Route path="/login" render={() => <p>Please login!</p>} />
        <Route path="/" render={() => <p>404 Page</p>} />
    </Switch>
);

export default Routes;
