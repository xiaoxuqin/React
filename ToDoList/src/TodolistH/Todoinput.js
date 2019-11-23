import React,{Component} from 'react';

export default class Todoinput extends Component {
    handleInput = (e) => {
        if(e.target.value && e.keyCode === 13){
            this.props.add(e.target.value);
            e.target.value = '';
            /** 
             * 每次触发DOM事件时会产生一个事件对象（event对象），
             * 此处的参数e接收事件对象，事件对象有很多属性和方法，
             * target属性是获取触发事件对象的目标，也就是绑定事件的元素，
             * e.target表示该DOM元素，然后再获取其相应的属性值
             */
        }
    } 

    render(){
        return(
            <div id='ToDo'>
                <div id='ToDoList'>ToDoList</div>
                <input id='Input' onKeyDown={this.handleInput} type="text" placeholder="添加ToDo"/>
            </div>
        )
    }
}