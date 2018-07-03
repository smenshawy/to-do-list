const items = ( state = [], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [
                ...state,
                {id: Date.now(), action: '', done: false, x: action.x, y: action.y}
            ]
        case 'UPDATE_ITEM':
            return state.map(item => {
                    if(item.id === action.id){
                        return {...item, action: action.action, done: action.done}
                    } else {
                        return item
                    }
                })
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.itemId)
        default:
            return state
    }
}

export default items