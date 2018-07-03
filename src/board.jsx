import React, {Component} from 'react'
import Item from './item'
import Overlay from './overlay'
import './board.css'
import {connect} from 'react-redux'
import {addItem} from './actions'

class Board extends Component{

    constructor(props){
        super(props)

        this._addItem = this._addItem.bind(this);
    }

    _addItem(e){
        this.props.addItem(e.nativeEvent.clientX, e.nativeEvent.clientY)
    }

    render(){
        const { items, editMode} = this.props;
        return(
            <div className='board' onDoubleClick={this._addItem}>
                {items.map(({id, action, done, x, y}) => {
                    return (
                        <Item key={id} id={id} action={action} done={done} x={x} y={y}/>
                    )
                })}

                {editMode && <Overlay/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        editMode: state.editItem.editMode
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addItem: (x, y) => {
            dispatch(addItem(x, y))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)