import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateItem} from './actions'
import './overlay.css'

class Overlay extends Component{
    constructor(props){
        super(props)
        const {itemToEdit} = props
        this.state = {
            action: itemToEdit.action,
            done: itemToEdit.done,
        }
        
        this._handleChange = this._handleChange.bind(this)
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
        const {itemToEdit, onUpdateClick} = this.props
        return (
            <div className='overlay' onDoubleClick={e=>{e.stopPropagation()}}>
                <form onSubmit={this.handleSubmit} className='overlay__form'>
                    <label>
                        Action:
                        <input type="text" name='action' value={action} onChange={(e) => this._handleChange('action', 'text', e)} />
                    </label>
                    <label>
                        Done:
                        <input type="checkbox" name='done' checked={done} onChange={e=>this._handleChange('done', 'checkbox', e)} />
                    </label>
                    <input type="submit" value="update" onClick={e=> onUpdateClick(itemToEdit.id, action, done)}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        itemToEdit: state.items.find(i => i.id === state.editItem.id)
    }
}

const mapDisplatchToProps = dispatch => {
    return {
        onUpdateClick: (id, action, done) => {
            dispatch(updateItem(id, action, done))
        }
    }
}

export default connect(mapStateToProps, mapDisplatchToProps)(Overlay)