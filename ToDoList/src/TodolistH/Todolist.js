import React, {Fragment, Component} from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import './Todolist.css';
 
export default class Todolist extends Component {
    constructor() {
        super();   
        // localStorage.clear();
        // localStorage.removeItem('todo');
        /**
         * JSON.parse(字符串) 将数据转化为JS对象
         * localStorage用于持久化的本地存储，除非主动删除，否则数据永远不会过期
         * localStorage.getItem(key):获取指定key本地存储的值
         * localStorage.setItem(key,value)：将value存储到key字段
         * localStorage.removeItem(key):删除指定key本地存储的值
         * localStorage.clear(); 清空本地存储
         */
        let todo = JSON.parse(localStorage.getItem('todo'));
        if (todo) {
            this.state = {
                todoList: todo,
                todocount:0,
                donecount:0
            }
        } else{
            this.state = {
                todoList: [],
                todocount:0,
                donecount:0
            }
        }
    }
    addItem = (data) => {
        let item = {"title": data, "done": false};
        this.setState({
            todoList: [...this.state.todoList, item]
            /**
             * ...扩展运算符：
             * 用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
             * todo添加到todoList列表当中
             */
        }, ()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todoList));
            /**
             * 键值对：键必须为字符串
             */
        })
    }
    delItem = (idx) => {
        let item = this.state.todoList;
        item.splice(idx, 1);
        this.setState({
            todoList: item
        });
    }
    changeItem = (idx) => {
        let item = this.state.todoList;
        item[idx].done = !(item[idx].done);
        this.setState({
            todoList: item
        })
    }

    render() {
        localStorage.setItem('todo',JSON.stringify(this.state.todoList));
        this.state.todocount = this.state.donecount = 0;
        let item = this.state.todoList;
        // console.log(typeof(this.state.todoList));        
        for(var i in item){
            if (item[i].done) {
                this.state.donecount++;
            } else {
                this.state.todocount++;
            }
        }
        return (
            <Fragment>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todoList} change={this.changeItem} todocount={this.state.todocount} donecount={this.state.donecount}/>
            </Fragment>
        )
    }
}