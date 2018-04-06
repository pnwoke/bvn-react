import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_ACCOUNT
export const addAccount = (account) => ({
    type: 'ADD_ACCOUNT',
    account
});

export const startAddAccount = (accountData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            surName = '',
            firstName = '',
            otherName = '',
            sex = '',
            dateOfBirth = '',
            localGovt = '',
            state = '',
            country = '',
            createdAt = 0
        } = accountData;
        const account = {
            surName,
            firstName,
            otherName,
            sex,
            dateOfBirth,
            localGovt,
            state,
            country,
            createdAt
        };

        return database.ref(`users/${uid}/accounts`).push(account).then((ref) => {
            dispatch(addAccount({
                id: ref.key,
                ...account
            }));
        });
    };
};

//REMOVE_ACCOUNT
export const removeAccount = ({ id } = {}) => ({
    type: 'REMOVE_ACCOUNT',
    id
});

export const startRemoveAccount = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/accounts/${id}`).remove().then((ref) => {
            dispatch(removeAccount({accounts}));
        });
    };
};

//EDIT_ACCOUNT
export const editAccount = (id, updates) => ({
    type: 'EDIT_ACCOUNT',
    id,
    updates
});

export const startEditAccount = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/accounts/${id}`).update(updates).then(() => {
            dispatch(addAccount(id, updates));
        });
    };
};

//SET_ACCOUNTS
export const setAccounts = (accounts) => ({
    type: 'SET_ACCOUNTS',
    accounts
});

export const startSetAccounts = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/accounts`).once('value').then((ref) => {
            const accounts = [];

            ref.forEach((childRef) => {
                accounts.push({
                    id: childRef.key,
                    ...childRef.val()
                });
            });

            dispatch(setAccounts(accounts));
        });
    };
};