import React from 'react';
import { connect } from 'react-redux';
import AccountForm from './AccountForm';
import { editAccount, removeAccount } from '../actions/accounts';

const EditAccountPage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Edit Account</h1>
            <AccountForm 
                account={props.account}
                onSubmit={(account) => {
                    props.dispatch(editAccount(props.account.id, account));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeAccount({ id: props.account.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        account: state.accounts.find((account) => account.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditAccountPage);