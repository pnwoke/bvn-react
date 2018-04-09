import React from 'react';
import { connect } from 'react-redux';
import AccountListItem from './AccountListItem';
import selectAccounts from '../../selectors/accounts';

const AccountList = (props) => (
    <div>
        <h1>List of Accounts</h1>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">BVN</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            {props.accounts.map((account) => {
                return <AccountListItem key={account.id} {...account} />
            })}
        </table>
    </div>
);

const mapStateToProps = (state) => {
    return{
        accounts: selectAccounts(state.accounts, state.filters)
    };
};

export default connect(mapStateToProps)(AccountList);