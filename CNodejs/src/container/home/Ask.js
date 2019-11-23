import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Ask extends Component {
    constructor() {
        super();
        this.state = { 
            data: []
        }
    }
    componentDidMount() {
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&page=' + page)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps, prevState) {
        // 判断是否变化，不要一直发请求
        if (prevProps.match.params.page !== this.props.match.params.page) {
            let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&page=' + page)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                });
            })
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item) => (
                        <div className='inner' key={item.id}>
                            <div id='topic_list'>
                                <div className='cell'>
                                    <a className='user_avatar pull-left'>
                                        <img src={item.author.avatar_url} />
                                    </a>
                                    <span className='reply_count pull-left'>
                                        <span className='count_of_replies'>{item.reply_count} /</span>
                                        <span className='count_of_visits'>{item.visit_count}</span>
                                    </span>
                                    <a className='last_time pull-right'>3天前</a>
                                    <div className='topic_title_wrapper'>
                                        <span className='topiclist-tab'>分享</span>
                                        <Link className='topic_title' to={'/topic/' + item.id}>{item.title}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                <div>
                    <div className='pagination' current_page='1'>
                        <ul>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                    <li key={item}>
                                        <Link style={{ color: 'gray' }} to={'/home/ask/' + item}>{item}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
