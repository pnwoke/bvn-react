import React from 'react';
import moment from 'moment';
import blobToBase64 from 'blob-to-base64';
// import Webcam from 'react-webcam';
import Camera from 'react-camera';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

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
            calenderFocused: false,
            error: '',
            style: {
                preview: {
                    position: 'relative',
                },
                captureContainer: {
                    display: 'flex',
                    position: 'absolute',
                    justifyContent: 'center',
                    zIndex: 1,
                    bottom: 0,
                    width: '100%'
                },
                captureButton: {
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    height: 56,
                    width: 56,
                    color: '#000',
                    margin: 20
                },
                captureImage: {
                    width: '100%',
                }
            }
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
    onSexChange = (e) => {
        const sex = e.target.value;
        this.setState(() => ({ sex }));
    };
    onLocalGovtChange = (e) => {
        const localGovt = e.target.value;
        this.setState(() => ({ localGovt }));
    };
    onStateChange = (e) => {
        const state = e.target.value;
        this.setState(() => ({ state }));
    };
    onCountryChange = (e) => {
        const country = e.target.value;
        this.setState(() => ({ country }));
    };
    onDateChange = (dateOfBirth) => {
        if (dateOfBirth) {
            this.setState(() => ({ dateOfBirth }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    };
    setRef = (webcam) => {
        this.webcam = webcam;
    };
    webcamButton = (e) => {
        e.preventDefault();

        if (!this.state.imageUrl) {
            this.camera.capture()
            .then(blob => {
                this.img.src = URL.createObjectURL(blob);
                this.img.onload = () => { URL.revokeObjectURL(this.src); }
                blobToBase64(blob, function (error, base64) {
                    if (!error) {
                        this.setState(() => ({ imageUrl: base64 }));
                    }
                });
            });
            
        } else {
            this.setState(() => ({ imageUrl: '' }));
        }
    };
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
                sex: this.state.sex,
                localGovt: this.state.localGovt,
                state: this.state.state,
                country: this.state.country,
                imageUrl: this.state.imageUrl,
                dateOfBirth: this.state.dateOfBirth.valueOf(),
                createdAt: moment().valueOf()
            });
        }
    };
    render() {
        return (
            <div>
                <div className="form">
                    {!!this.state.imageUrl ? 
                        <img className="img-thumbnail v-pics" src={this.state.imageUrl} /> : 
                        <div className="v-pics">
                            <Camera
                                className="img-thumbnail"
                                ref={(cam) => {
                                    this.camera = cam;
                                }}
                            >
                            </Camera>
                            <img
                                ref={(img) => {
                                    this.img = img;
                                }}
                            />
                        </div>
                    }
                    <div>
                        <button className="button btn-block" onClick={this.webcamButton}>{ !!this.state.imageUrl ? 'Retake' : 'Capture' }</button>
                    </div>
                </div>
                <form className="form" onSubmit={this.onSubmit}>
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
                    <select
                        className="select"
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <SingleDatePicker
                        date={this.state.dateOfBirth}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Local Government Area"
                        value={this.state.localGovt}
                        onChange={this.onLocalGovtChange}
                    />
                    <input
                        type="text"
                        className="text-input"
                        placeholder="State of Origin"
                        value={this.state.state}
                        onChange={this.onStateChange}
                    />
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Country of Origin"
                        value={this.state.country}
                        onChange={this.onCountryChange}
                    />
                    <div>
                        <button className="button">Save Account</button>
                    </div>
                </form>
            </div>
        )
    }
};
