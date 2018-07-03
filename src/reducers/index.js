import {combineReducers} from 'redux'
import items from './items'
import editItem from './editItem'

export default combineReducers({items, editItem})