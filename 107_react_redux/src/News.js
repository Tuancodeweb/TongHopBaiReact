import React, { Component } from 'react';
import { connect } from 'react-redux';

 class News extends Component {
    //  // đây là hàm gọi state ở store gốc
    //  EditStatusStore = () => {
    //     this.props.dispatch({
    //         type : "value_key_action"
    //     })
    // }
    render() {
      
        return (
            <div>
                <h2> xin chào tôi tên là à éo nhớ </h2>
                <button onClick={() => this.props.EditStatusStore()}>Click Me</button>
            </div>
        );
    }
}
// đây là hàm gọi reducer
const mapStateToProps = (state, ownProps) => {
    return {
        EditStatus2: state.EditStatus2
    }
}
// chuyền tham số từ Store vào ví DISPATCH
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        EditStatusStore: () => {
            dispatch({
                type : "value_key_action"
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(News)            