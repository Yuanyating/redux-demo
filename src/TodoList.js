import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
import {inputChangeValue, addListItem, deleteListItem, getTodoList } from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.inputChange = this.inputChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)

        store.subscribe(this.storeChange)
    }

    componentDidMount(){
        const action = getTodoList()    //redux-thunk中间件提供了使dispatch方法接收一个函数的功能
        store.dispatch(action)
    }

    inputChange = (e) => {
        const action = inputChangeValue(e.target.value)
        store.dispatch(action)
    }

    addItem = () => {
        const action = addListItem()
        store.dispatch(action)
    }

    deleteItem = (index) => {
        const action = deleteListItem(index)
        store.dispatch(action)
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    render() { 
        return ( 
            <TodoListUI 
                inputValue = {this.state.inputValue}
                inputChange = {this.inputChange}
                addItem = {this.addItem}
                list = {this.state.list}
                deleteItem = {this.deleteItem}
            />
        );
    }
}
 
export default TodoList;