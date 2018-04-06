import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';

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
            calenderFocused: false,
            error: ''
        };
    }
    
    onSurNameChange = (e) => {
        const surName = e.target.value;
        this.setState(() => ({ surName }));
    };
    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    };
    onOtherNameChange = (e) => {
        const otherName = e.target.value;
        this.setState(() => ({ otherName }));
    };
    onDateChange = (dateOfBirth) => {
        if (dateOfBirth) {
            this.setState(() => ({ dateOfBirth }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.surName || !this.state.firstName || !this.state.otherName) {
            this.setState(() => ({ error: 'Please provide all useful information!' }));
        }else{
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                surName: this.state.surName,
                firstName: this.state.firstName,
                otherName: this.state.otherName,
                dateOfBirth: this.state.dateOfBirth.valueOf(),
                createdAt: moment().valueOf()
            });
        }
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Surname"
                    autoFocus
                    className="text-input"
                    value={this.state.surName}
                    onChange={this.onSurNameChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.onFirstNameChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Other Name"
                    value={this.state.otherName}
                    onChange={this.onOtherNameChange}
                />
                <SingleDatePicker
                    date={this.state.dateOfBirth}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <div>
                    <button className="button">Save Account</button>
                </div>
            </form>
        )
    }
}