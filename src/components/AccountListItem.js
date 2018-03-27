import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import numeral from 'numeral';

const AccountListItem = ({ id, firstName, surName, otherName, state, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <p>{surName} - {firstName} - {otherName}</p>
        </Link>
        <p>
            {state}
             - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

// {numeral(state).format('$0,0.00')}
export default AccountListItem;