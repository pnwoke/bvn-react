import uuid from 'uuid';

//ADD_ACCOUNT
export const addAccount = (
    {
        surName = '',
        firstName = '',
        otherName = '',
        sex = '',
        dateOfBirth = '',
        localGovt = '',
        state = '',
        country = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_ACCOUNT',
    account: {
        id: uuid(),
        surName,
        firstName,
        otherName,
        sex,
        dateOfBirth,
        localGovt,
        state,
        country,
        createdAt
    }
});

//REMOVE_ACCOUNT
export const removeAccount = ({ id } = {}) => ({
    type: 'REMOVE_ACCOUNT',
    id
});

//EDIT_ACCOUNT
export const editAccount = (id, updates) => ({
    type: 'EDIT_ACCOUNT',
    id,
    updates
});