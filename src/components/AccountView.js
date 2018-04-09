import React from 'react';
import moment from 'moment';

export default class AccountForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            surName: props.account ? props.account.surName : '',
            firstName: props.account ? props.account.firstName : '',
            otherName: props.account ? props.account.otherName : '',
            sex: props.account ? props.account.sex : '',
            dateOfBirth: props.account ? moment(props.account.dateOfBirth) : moment(),
            localGovt: props.account ? props.account.localGovt : '',
            state: props.account ? props.account.state : '',
            country: props.account ? props.account.country : '',
            createdAt: props.account ? moment(props.account.createdAt) : '',
            imageUrl: props.account ? props.account.imageUrl : '',
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.surName}</p>
                <p>{this.state.firstName}</p>
                <p>{this.state.otherName}</p>
                <p>{this.state.sex}</p>
                <p>{this.state.dateOfBirth}</p>
                <p>{this.state.localGovt}</p>
                <p>{this.state.state}</p>
                <p>{this.state.country}</p>
                <p>{this.state.createdAt}</p>
                <p>{this.state.imageUrl}</p>
            </div>
        )
    }
}