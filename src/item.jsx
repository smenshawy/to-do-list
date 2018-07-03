import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './item.css'
import {connect} from 'react-redux'
import {editItem, deleteItem} from './actions'


class Item extends Component{
    constructor(props){
        super(props)
        
        this._editItem = this._editItem.bind(this)
        this._deleteItem = this._deleteItem.bind(this)
        this._handleChange = this._handleChange.bind(this)
    }

    _editItem(e){
        const { id } = this.props
        this.props.onEditItem(id)
        e.stopPropagation()
    }

    _deleteItem(e){
        const { id } = this.props
        this.props.onDeleteItem(id)
        e.stopPropagation()
    }
    _handleChange(stateKey, type, event) {
        switch(type){
            case 'checkbox':
                this.setState({[stateKey]: event.target.checked})
                break
            default:
                this.setState({[stateKey]: event.target.value})
                break;

        }
    }

    render(){
        const {id, action, done, x, y} = this.props
        return(
            <div onDoubleClick={this._editItem} className='item'    style={{left: x, top: y}}>
                <span onClick={this._deleteItem}>x</span>
                <div className={done && 'item__content--done'}>{action}</div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onEditItem:itemId => { dispatch(editItem(itemId))},
        onDeleteItem: itemId => { dispatch(deleteItem(itemId))},
    }
}

export default connect(null, mapDispatchToProps)(Item)

Item.propTypes = {
    id: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
}