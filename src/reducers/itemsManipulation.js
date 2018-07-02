const itemsManipulation = ( state = {}, action) => {
    switch(action.type){
        case 'EDIT_ITEM':
        console.log(1)
            return {
                id: action.item.id,
                action: action.item.action,
                done: action.item.done,
                editMode: true,
            }
        case 'UPDATE_ITEM':
            return {
                ...state,
                action: action.action,
                done: action.done,
                editMode: false,
            }
        default:
            return state
    }
}

export default itemsManipulation