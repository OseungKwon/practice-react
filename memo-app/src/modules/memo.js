import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as WebAPI from '../lib/web-api';

const CREATE_MEMO = 'memo/CREATE_MEMO';

export const createMemo = createAction(CREATE_MEMO, WebAPI.createMemo) // { title, body }

const initialState = Map({

});

export default handleActions({

}, initialState);