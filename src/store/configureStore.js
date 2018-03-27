import { createStore, combineReducers } from 'redux';
import accountsReducer from '../reducers/accounts';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            accounts: accountsReducer,
            filters: filtersReducer
        })
    );

    return store;
};