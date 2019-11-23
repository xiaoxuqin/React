import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Idea from './Idea';
import Store from './Store';
import My from './My';

export default class AppTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, backgroundColor: '#fff' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="rgb(63,204,203)"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-shouye'></i>
            }
            selectedIcon={
              <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-shouye'></i>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-linggan1'></i>
            }
            selectedIcon={
              <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-linggan1'></i>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Idea />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-shangcheng'></i>
            }
            selectedIcon={
              <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-shangcheng'></i>
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Store />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-wode1'></i>
            }
            selectedIcon={
              <i style={{ fontSize: '22px', lineHeight: '22px' }} className='iconfont icon-wode1'></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <My />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}