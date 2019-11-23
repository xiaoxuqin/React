import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
export default class Admin extends Component {
    render() {
        return (
            <div className='panel'>
                <div className='inner' >
                    <div style={{ margin: '20px 100px' }}>
                        用户名
                    <div class="controls">
                            <input class="input-xlarge" id="name" name="name" size="30" type="text" />
                        </div>
                    </div>
                    <div style={{ margin: '20px 100px' }}>
                        密码
                    <div class="controls">
                            <input class="input-xlarge" id="pass" name="pass" size="30" type="password" />
                        </div>
                    </div>
                    <div style={{ margin: '20px 100px' }}>
                        <Link to='/home'>
                            <input class="span-primary" value="登录" type='submit' />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}