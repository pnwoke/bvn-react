import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
       <div className="box-layout__box" id="vlogin">
            <h1 className="box-layout__title">BVN</h1>
            <p>The best technology in Nigeria so far</p>
            <button className="button" onClick={startLogin}>Login</button>
       </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);