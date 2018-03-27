import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AccountDashboardPage from '../components/AccountDashboardPage';
import AddAccountPage from '../components/AddAccountPage';
import EditAccountPage from '../components/EditAccountPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={AccountDashboardPage} exact={true} />
                <Route path="/create" component={AddAccountPage} />
                <Route path="/edit/:id" component={EditAccountPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;