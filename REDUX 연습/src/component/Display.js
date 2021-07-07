import React from 'react'
import { connect } from 'react-redux';

const Display = ({ count }) => {
    return (
        <div>
            <p>구독자 수: {count}</p>
        </div>
    )
}

// 여기서 선언한 값이 props로 들어가게 됨
const mapStateToProps = ({ subscribers }) => {
    return {
        count: subscribers.count
    }
}

// connect에 연결
export default connect(mapStateToProps)(Display);
