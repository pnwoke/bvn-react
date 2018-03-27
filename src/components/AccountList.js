import React from 'react';
import { connect } from 'react-redux';
import AccountListItem from './AccountListItem';
import selectAccounts from '../selectors/accounts';

const AccountList = (props) => (
    <div>
        <h1>List of Accounts</h1>
        {props.accounts.map((account) => {
            return <AccountListItem key={account.id} {...account} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return{
        accounts: selectAccounts(state.accounts, state.filters)
    };
};

export default connect(mapStateToProps)(AccountList);