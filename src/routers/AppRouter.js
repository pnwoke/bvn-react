import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import AccountDashboardPage from '../components/admin/AccountDashboardPage';
import AddAccountPage from '../components/AddAccountPage';
import EditAccountPage from '../components/EditAccountPage';
import ViewAccountPage from '../components/ViewAccountPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/admin" component={AccountDashboardPage} />
                <PrivateRoute path="/create" component={AddAccountPage} />
                <PrivateRoute path="/edit/:id" component={EditAccountPage} />
                <PrivateRoute path="/view/:id" component={ViewAccountPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;