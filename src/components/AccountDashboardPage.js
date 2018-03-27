import React from 'react';
import AccountList from './AccountList';
import AccountListFiters from './AccountListFilters';

const AccountDashboardPage = () => (
    <div>
        <AccountListFiters />
        <AccountList />
    </div>
);

export default AccountDashboardPage;