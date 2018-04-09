import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import numeral from 'numeral';

const AccountListItem = ({ id, firstName, surName, otherName, state, createdAt }) => (
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>{surName}</td>
            <td>{firstName}</td>
            <td>1111</td>
            <td><Link className="button button__link ppp" to={`/view/${id}`}>Click to validate</Link></td>
        </tr>
    </tbody>
);

// {numeral(state).format('$0,0.00')}
export default AccountListItem;