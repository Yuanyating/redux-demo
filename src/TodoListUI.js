import React from 'react';
import 'antd/dist/antd.css';
import {List, Button, Input} from 'antd';

const TodoListUI = (props) => {
    return(
        <div style={{margin: '50px'}}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    value={props.inputValue}
                    style={{marginRight:'10px', width:'200px'}}
                    onChange={props.inputChange}
                />
                <Button type="primary" onClick={props.addItem}>add</Button>
            </div>
            <div>
                <List bordered style={{marginTop:'20px'}}>{props.list.map((item,index) => {
                    return(
                        <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
                    )
                })}</List>
            </div>
        </div>
    )
}
export default TodoListUI;