import React from 'react';
import { connect } from 'react-redux';
// connect: 하위 컴포넌트에서 redux store를 접근하는 것을 가능하게 해주는 역할
import { addSubscriber } from '../redux/index';

const Subscribers = ({ count, addSubscriber }) => {
    return (
        <div className="items">
            <h2>구독자 수: {count}</h2>
            <button onClick={() => addSubscriber()}>구독하기</button>
        </div>
    )
}
// 컴포넌트에 props로 넣어줄 리덕스 스토어 상태에 관련된 함수
const mapStateToProps = ({ subscribers }) => {
    return {
        count: subscribers.count
    }
}

// 컴포넌트에 props로 넣어줄 액션을 디스패치하는 함수들에 관련된 함수
const mapDispatchToProps = {
    addSubscriber
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);