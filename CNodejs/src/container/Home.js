import React, { Component } from 'react'
import { Link, Route, Redirect} from 'react-router-dom';
import All from './home/All';
import Good from './home/Good';
import Share from './home/Share';
import Ask from './home/Ask';
import Job from './home/Job';

export default class Home extends Component {
    render() {
        let { url } = this.props.match;
        return (
            <div className='panel'>
                <div className='header'>
                    <Link to={`${url}/all/1`}>全部</Link> 
                    <Link to={`${url}/good/1`}>精华</Link>
                    <Link to={`${url}/share/1`}>分享</Link>
                    <Link to={`${url}/ask/1`}>问答</Link>
                    <Link to={`${url}/job/1`}>招聘</Link>
                </div>
                <div>
                    <Route path="/home" exact render={() => <Redirect from='/home' to='/home/all/1' />} />
                    <Route path={`${url}/all/:page`} component={All} />
                    <Route path={`${url}/good/:page`} component={Good} />
                    <Route path={`${url}/share/:page`} component={Share} />
                    <Route path={`${url}/ask/:page`} component={Ask} />
                    <Route path={`${url}/job/:page`} component={Job} />
                </div>
            </div>
        )
    }
}