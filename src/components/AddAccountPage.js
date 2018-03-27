import React from 'react';
import { connect } from 'react-redux'; 
import AccountForm from './AccountForm';
import { addAccount } from '../actions/accounts';

const AddAccountPage = (props) => (
    <div>
        <h1>Add New Account</h1>
        <AccountForm
            onSubmit={(account) => {
                props.dispatch(addAccount(account));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddAccountPage);