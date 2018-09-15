import React, { Component } from 'react';

class Noidung extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps đã chạy');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate đã chạy');
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate đã chạy');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate đã chạy');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate đã chạy')
    }
    
    
    

    render() {
        console.log('render đã chạy');
        return (
            <div>
                {this.props.tieude}
            </div>
        );
    }
}

export default Noidung;