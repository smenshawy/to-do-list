export const addItem = (x, y) => ({
    type: 'ADD_ITEM',
    x,
    y,
})

export const editItem = itemId => ({
    type: 'EDIT_ITEM',
    itemId,
})

export const updateItem = (id, action, done) => ({
    type: 'UPDATE_ITEM',
    id,
    action,
    done,
})

export const deleteItem = itemId => ({
    type: 'DELETE_ITEM',
    itemId,
})