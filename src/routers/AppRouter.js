import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import AccountDashboardPage from '../components/AccountDashboardPage';
import AddAccountPage from '../components/AddAccountPage';
import EditAccountPage from '../components/EditAccountPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={AccountDashboardPage} />
                <PrivateRoute path="/create" component={AddAccountPage} />
                <PrivateRoute path="/edit/:id" component={EditAccountPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;