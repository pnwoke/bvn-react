import React from 'react';
import { connect } from 'react-redux';
import AccountView from './AccountView';
import { startVerifyAccount, startRemoveAccount } from '../actions/accounts';

class ViewAccountPage extends React.Component {
    onSubmit = () => {
        this.props.dispatch(startVerifyAccount(this.props.account.id, account));
        this.props.history.push('/admin');
    };
    onRemove = () => {
        this.props.dispatch(startRemoveAccount({ id: this.props.account.id }));
        this.props.history.push('/admin');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Verify Account</h1>
                    </div>
                </div>
                <div className="content-container">
                    
                    <button className="button button--secondary" onClick={this.onSubmit}>Verify Account</button>
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Account</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    account: state.accounts.find((account) => account.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startVerifyAccount: (data) => dispatch(startVerifyAccount(data)),
    startRemoveAccount: (data) => dispatch(startRemoveAccount(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewAccountPage);