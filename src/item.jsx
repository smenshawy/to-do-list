import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './item.css'
import {connect} from 'react-redux'
import {editItem} from './actions'


class Item extends Component{
    constructor(props){
        super(props)
        this.state = {
            action: '',
            done: false,
        }
        
        this._editItem = this._editItem.bind(this)
        this._handleChange = this._handleChange.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(this.props.id === nextProps.updatedItemId){
            this.setState({action: nextProps.updatedItemAction, done: nextProps.updatedItemDone})
        }
    }

    _editItem(e){
        const {action, done} = this.state
        this.props.onEditItem({id: this.props.id, action, done})
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
        const {action, done} = this.state
        return(
            <div>
                <div onDoubleClick={e=>{this._editItem(e)}} className={`item ${done? 'item--done': ''}`} 
                    style={{left: this.props.x, top: this.props.y}}>
                    {action}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        updatedItemId: state.itemsManipulation.id,
        updatedItemAction: state.itemsManipulation.action,
        updatedItemDone: state.itemsManipulation.done,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditItem: item => {
            dispatch(editItem(item))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)

Item.propTypes = {
    id: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
}