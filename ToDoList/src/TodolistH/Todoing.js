import React, {Fragment, Component } from 'react';

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        /**
         * this.props对象：
         * 对组件标签中的标签属性和子节点构成的集合
         */
        return (
            <Fragment>
                <h2>正在进行<span>{this.props.todocount}</span> </h2>
                <ol>
                {
                    todo.map((item,idx) => {
                        if(!item.done){
                            return(
                                <li key={idx}>
                                    <input type='checkbox' onClick={()=>this.props.change(idx)}/>
                                    <p>{item.title}</p>
                                    <a onClick={()=>this.props.del(idx)}>-</a>
                                </li>
                            )
                        }else{
                            return ('')
                        }
                    })     
                }
                </ol>
                
                <h2>已经完成 <span>{this.props.donecount}</span> </h2>
                <ul> 
                {
                    todo.map((item,idx) => {
                        if(item.done){
                            return(
                                <li key={idx}>
                                    <input type='checkbox' onClick={()=>this.props.change(idx)} checked="checked"/>
                                    <p>{item.title}</p>
                                    <a onClick={()=>this.props.del(idx)}>-</a>
                                </li>
                            )
                        }else{
                            return ('')
                        }
                    })     
                }
                </ul>
            </Fragment>
        )
    }
}