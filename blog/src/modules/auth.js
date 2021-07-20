import { createAction, handleActions } from 'redux-actions';

const CHANGE_FILED = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
    CHANGE_FILED,
    ({ form, key, value }) => ({
        form,
        key,
        value
    })
)

export default auth;