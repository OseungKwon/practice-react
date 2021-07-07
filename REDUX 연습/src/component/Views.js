import React, { useState } from 'react';
import { connect } from 'react-redux';
// connect: 하위 컴포넌트에서 redux store를 접근하는 것을 가능하게 해주는 역할
import { addView } from '../redux/index';

const Views = ({ count, addView }) => {

    const [number, setNumber] = useState(1);

    return (
        <div className="items">
            <h2>조회 수: {count}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => addView(number)}>조회하기!</button>
        </div>
    )
}
// 컴포넌트에 props로 넣어줄 리덕스 스토어 상태에 관련된 함수
const mapStateToProps = ({ views }) => {
    return {
        count: views.count
    }
}

// 컴포넌트에 props로 넣어줄 액션을 디스패치하는 함수들에 관련된 함수
const mapDispatchToProps = {
    addView: (number) => addView(number)
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Views);