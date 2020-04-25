import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'

//增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

//由于createStore只能接收两个参数，因此要做一个增强函数
const store = createStore(reducer,enhancer);
export default store