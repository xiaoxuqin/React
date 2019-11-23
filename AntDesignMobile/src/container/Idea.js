/**Idea.js */
import React, { Component } from 'react'
import { NavBar, Tabs, WhiteSpace, Badge, Flex } from 'antd-mobile';
export default class Idea extends Component {
    render() {
        return (
            <div>
                {/* NavBar */}
                <NavBar
                    style={{ backgroundColor: 'rgb(64,203,204)', color: 'white' }}
                >
                    <p style={{ marginLeft: '30px' }}>灵感</p>

                    <div class="am-navbar-right">
                        <img style={{ width: '20px', height: '20px', marginRight: '-100px' }} src={require('../images/idea_5.png')} />
                    </div>
                </NavBar>

                {/* Tabs */}
                <Tabs tabs={
                    [
                        { title: <Badge>推荐</Badge> },
                        { title: <Badge>冬季</Badge> },
                        { title: <Badge>宜家</Badge> },
                        { title: <Badge>小清新</Badge> },
                        { title: <Badge>小户型</Badge> },
                        { title: <Badge>个性色彩</Badge> },
                    ]
                }
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '470px', backgroundColor: '#fff' }}>
                        
                        {/* Flex */}
                        <div className="idea-flex-container">
                            <Flex>
                                <Flex.Item >
                                    <img className='idea-placeholder' src={require('../images/idea_2.png')}
                                        alt=""
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className='ideaName'>
                                        <img className='ideaImg1' src={require('../images/idea_4.png')} />
                                        <p>橙色律动</p>
                                        <img className='ideaImg2' src={require('../images/idea_3.png')} />
                                    </div>
                                </Flex.Item>
                                <Flex.Item>
                                    <img className='idea-placeholder' src={require('../images/idea_1.png')}
                                        alt=""
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className='ideaName'>
                                        <img className='ideaImg1' src={require('../images/idea_4.png')} />
                                        <p>儿童房</p>
                                        <img className='ideaImg2' src={require('../images/idea_3.png')} />
                                    </div>
                                </Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                            <Flex>
                                <Flex.Item >
                                    <img className='idea-placeholder' src={require('../images/idea_1.png')}
                                        alt=""
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className='ideaName'>
                                        <img className='ideaImg1' src={require('../images/idea_4.png')} />
                                        <p>翻滚吧，地毯君</p>
                                        <img className='ideaImg2' src={require('../images/idea_3.png')} />
                                    </div>
                                </Flex.Item>
                                <Flex.Item>
                                    <img className='idea-placeholder' src={require('../images/idea_2.png')}
                                        alt=""
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className='ideaName'>
                                        <img className='ideaImg1' src={require('../images/idea_4.png')} />
                                        <p>角落里的遐想</p>
                                        <img className='ideaImg2' src={require('../images/idea_3.png')} />
                                    </div>
                                </Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                            <Flex>
                                <Flex.Item >
                                    <img className='idea-placeholder' src={require('../images/idea_2.png')}
                                        alt=""
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className='ideaName'>
                                        <img className='ideaImg1' src={require('../images/idea_4.png')} />
                                        <p>橙色律动</p>
                                        <img className='ideaImg2' src={require('../images/idea_3.png')} />
                                    </div>
                                </Flex.Item>
                                <Flex.Item>
                                    <img className='idea-placeholder' src={require('../images/idea_1.png')}
                                        alt=""
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <div className='ideaName'>
                                        <img className='ideaImg1' src={require('../images/idea_4.png')} />
                                        <p>橙色律动</p>
                                        <img className='ideaImg2' src={require('../images/idea_3.png')} />
                                    </div>
                                </Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        冬季
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        宜家
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        小清新
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        小户型
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        个性色彩
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}