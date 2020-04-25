import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes';
import axios from 'axios';

export const inputChangeValue = (value) => ({
    type: INPUT_CHANGE,
    value
})

export const addListItem = () => ({
    type: ADD_ITEM,
})

export const deleteListItem = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({   //普通的返回对象({})
    type: GET_LIST,
    data
})

export const getTodoList = () => {  //使用redux返回函数
    return (dispatch) => {  //这里可以传递dispatch和getState
        axios.get('http://rap2.taobao.org:38080/app/mock/252079/getList')
        .then((res) => {
            const data = res.data
            const action = getListAction(data)  //redux-thunk使得action变成一个可以执行异步逻辑的action
            dispatch(action)
        })
    }
}