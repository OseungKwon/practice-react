import { createAction, handleActions } from 'redux-actions';
const ITEM_INSERT = 'items/ITEM_INSERT';
const ITEM_REMOVE = 'items/ITEM_REMOVE';
const ITEM_UPDATE = 'items/ITEM_UPDATE';
const ITEM_LOAD = 'items/ITEM_LOAD';

// GET 전체 items 가져오기
export const loadItem = createAction(ITEM_LOAD, items => items)
// POST
export const insertItem = createAction(ITEM_INSERT, (id, content) => ({
    id: id,
    content
}))
// DELETE
export const removeItem = createAction(ITEM_REMOVE, id => id)
// PUT
export const updateItem = createAction(ITEM_UPDATE, (id, content) => ({
    id: id,
    content: content
}))

const items = handleActions(
    {
        [ITEM_LOAD]: (state, action) => ({
            items: action.payload
        }),
        [ITEM_INSERT]: (state, action) => ({
            items: state.items.concat(action.payload),
            id: action.id
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
    {
        items: []
    }
)
export default items;