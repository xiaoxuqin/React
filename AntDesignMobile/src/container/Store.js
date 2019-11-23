/**Store.js */
import React, { Component } from 'react'
import { NavBar, Carousel, Grid, Flex, WhiteSpace } from 'antd-mobile';
export default class Store extends Component {
    // Carousel
    state = {
        data: ['1', '2', '3', '4'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['3', '3', '3', '3'],
            });
        }, 100);
    }

    render() {
        return (
            <div>
                {/* NavBar */}
                <NavBar
                    style={{ backgroundColor: 'rgb(64,203,204)', color: 'white' }}
                >
                    <p style={{ marginLeft: '30px' }}>商城</p>

                    <div class="am-navbar-right">
                        <img style={{ width: '20px', height: '20px', marginRight: '-100px' }} src={require('../images/store_4.png')} />
                    </div>
                </NavBar>

                {/* Carousel */}
                <div style={{ position: 'relative' }}>
                    <Carousel
                        autoplay={true}
                        infinite
                        dotActiveStyle={{ backgroundColor: 'rgba(63,204,203)' }}
                        dotStyle={{ backgroundColor: 'white' }}
                    >
                        {this.state.data.map(val => (
                            <img src={require(`../images/store_${val}.png`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                    </Carousel>
                    <div className='storeSearch'>
                        <img className='i1' src={require('../images/store_5.png')} />
                        <input placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输入关键字搜索' />
                        <img className='i2' src={require('../images/store_6.png')} />
                    </div>
                </div>

                {/* Grid */}
                <Grid
                    data={
                        [[1, '桌'], [2, '床'], [3, '椅'], [4, '几'], [5, '柜'], [6, '书架'],
                        [7, '沙发'], [8, '家居饰品'], [9, '户外家具'], [10, '全部分类']].map(item => ({
                            icon: (
                                <div className='Grid'>
                                    <img style={{ width: '35px', height: '35px' }} src={require(`../images/s${item[0]}.png`)} />
                                    <div style={{ fontSize: '11px' }}>{item[1]}</div>
                                </div>),
                        }))
                    }
                    columnNum={5} hasLine={false} activeStyle={false} />

                {/* Flex */}
                <div className="store-flex-container">
                    <Flex>
                        <Flex.Item >
                            <img src={require('../images/store_1.png')}
                                alt=""
                                style={{ width: '100%', height: '100%' }}
                            />
                            <div className='storeName'>
                                <p className='store1'>Top Art Studio 欧式风格精细...</p>
                                <p className='store2'>￥39.95</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={require('../images/store_2.png')}
                                alt=""
                                style={{ width: '100%', height: '100%' }}
                            />
                            <div>
                                <p className='store1'>顺顺工艺欧式风格塑料外框黑...</p>
                                <p className='store2'>￥83.99</p>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item >
                            <img src={require('../images/store_1.png')}
                                alt=""
                                style={{ width: '100%', height: '100%' }}
                            />
                            <div className='storeName'>
                                <p className='store1'>Top Art Studio 欧式风格精细...</p>
                                <p className='store2'>￥39.95</p>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
            </div>
        )
    }
}