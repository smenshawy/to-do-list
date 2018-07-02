import React, {Component} from 'react'
import Item from './item'
import Overlay from './overlay'
import './board.css'
import {connect} from 'react-redux'

class Board extends Component{

    constructor(props){
        super(props)
        this.state = {
            items: []
        }

        this._createItem = this._createItem.bind(this);
    }

    _createItem(e){
        console.log(Date.now())
        const newItem = {
            id: Date.now(),
            x: e.nativeEvent.clientX, 
            y: e.nativeEvent.clientY,
        }


        this.setState(prevState => ({
            items : [...prevState.items, newItem]
        }))
    }

    render(){
        const { items } = this.state;
        return(
            <div className='board' onDoubleClick={this._createItem}>
                {items.map(({id, action, x, y}) => {
                    return (
                        <Item key={id} id={id} x={x} y={y}/>
                    )
                })}

                {this.props.editMode && <Overlay/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        editMode: state.itemsManipulation.editMode
    }
}

export default connect(mapStateToProps)(Board)