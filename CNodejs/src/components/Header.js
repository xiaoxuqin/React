import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='navbar'>
            <header>
                <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" />
                <form id="search_form" style={{display:'inline', margin:'0 50px'}} >
                    <input type="text" name="q" class="search-query span3" value="" />
                </form>
                <div style={{ float: 'right' }}>
                    <Link to='/home'>首页</Link>
                    <Link to='/start'>新手入门</Link>
                    <Link to='/api'>API</Link>
                    <Link to='/about'>关于</Link>
                    <Link to='/admin'>登录</Link>
                </div>
            </header>
        </div>
    )
}