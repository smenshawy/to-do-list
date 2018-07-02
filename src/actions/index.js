export const editItem = (item) => ({
    type: 'EDIT_ITEM',
    item,
})

export const updateItem = (id, action, done) => ({
    type: 'UPDATE_ITEM',
    id,
    action,
    done,
})