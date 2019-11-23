import React, { Component } from 'react';

export default class SecondList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let page = this.props.match.params.tab;
        console.log('page::' + page);
        fetch('https://cnodejs.org/api/v1/topic/' + page)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                });
                console.log('21', this.state.data);
            })
    }
    componentDidUpdate(prevProps, prevState) {
        let page = this.props.match.params.tab;
        console.log('page::' + page);
        if (prevProps.match.params.tab !== this.props.match.params.tab) {
            fetch('https://cnodejs.org/api/v1/topic/' + page)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        data: res.data
                    });
                    console.log('35', this.state.data);
                })
        }
    }
    render() {
        let { url } = this.props.match;
        console.log('url::' + url);
        console.log('this.state.data::' + this.state.data);
        return (
            <div>
                {
                    <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} className='markdown-text'></div>
                }
            </div>
        )
    }
}


