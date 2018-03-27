import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

export default AccountListItem;