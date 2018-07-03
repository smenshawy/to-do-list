const editItem = (state = {id: 0}, action) =>{
    switch(action.type){
        case 'EDIT_ITEM': {
            return {
                id: action.itemId,
                editMode: true,
            }
        }
        case 'UPDATE_ITEM': {
            return {
                ...state,
                editMode: false,
            }
        }
        default: {
            return state
        }
    }
}

export default editItem