import { Map } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const FOCUS_INPUT = 'ui/write/FOCUS_INPUT';
const BLUR_INPUT = 'ui/write/BLUR_INPUT';
const CHANGE_INPUT = 'ui/write/CHANGE_INPUT';
const RESET_INPUT = 'ui/write/RESET_INPUT';

export const focusInput = createAction(FOCUS_INPUT);
export const blurInput = createAction(BLUR_INPUT);
export const changeInput = createAction(CHANGE_INPUT); // { name, value }
export const resetInput = createAction(RESET_INPUT);

const initialState = Map({
    write: Map({
        focused: false,
        title: '',
        body: ''
    })
});

export default handleActions({
    [FOCUS_INPUT]: (state) => state.setIn(['write', 'focused'], true),
    [BLUR_INPUT]: (state) => state.setIn(['write', 'focused'], false),
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['write', name], value);
    },
    [RESET_INPUT]: (state) => state.set('write', initialState.get('write'))
}, initialState);