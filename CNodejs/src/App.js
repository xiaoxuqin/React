import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {HashRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from './container/Home';
import Start from './container/others/Start';
import Api from './container/others/Api';
import About from './container/others/About';
import Admin from './container/Admin';
import SecondList from './container/SecondList';

export default class App extends Component {
    render() {
        return (
            <Router basename='/React'>
                <div>
                    <Header/> 
                </div>
                <div className='main'>
                    <div className="content">
                        <Route path="/" exact render={() => <Redirect from='/' to='/home/all/1' />} />
                        <Route path='/home' component={Home}/> 
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/admin' component={Admin}/>
                        <Route path={'/topic/:tab'} component={SecondList} />
                    </div>
                    <div>
                        <Sidebar />
                    </div>
                </div>
            </Router>
        )
    }
}