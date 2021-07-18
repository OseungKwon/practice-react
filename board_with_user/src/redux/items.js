import { createAction, handleActions } from 'redux-actions';
const ITEM_INSERT = 'items/ITEM_INSERT';
const ITEM_REMOVE = 'items/ITEM_REMOVE';
const ITEM_UPDATE = 'items/ITEM_UPDATE';

let nextId = 2;
export const insertItem = createAction(ITEM_INSERT, content => ({
    id: nextId++,
    content
}))
export const removeItem = createAction(ITEM_REMOVE, id => id)
export const updateItem = createAction(ITEM_UPDATE, (id, content) => ({
    id: id,
    content: content
}))
const init = {
    items: [
        {
            id: 1,
            content: 'hi'
        }
    ]
}
const items = handleActions(
    {
        [ITEM_INSERT]: (state, action) => ({
            items: state.items.concat(action.payload)
        }),
        [ITEM_REMOVE]: (state, { payload: id }) => ({
            ...state,
            items: state.items.filter(item => item.id !== id)
        }),
        [ITEM_UPDATE]: (state, { payload: id, content }) => ({
            ...state,
            items: state.items.map((item) =>
                item.id === id ? { ...item, content: content } : item)
        })
    },

    init
)
export default items;