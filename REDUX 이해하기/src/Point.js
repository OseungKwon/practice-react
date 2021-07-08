import React from 'react';
import { connect } from 'react-redux';
import { addPoint } from './redux/action';

const Point = (props) => {
    return (
        <div className="Point">
            <h2>점수: {props.count}</h2>
            <button onClick={() => props.addPoint()}>point 획득</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = {
    addPoint
}

export default connect(mapStateToProps, mapDispatchToProps)(Point);
// https://react.vlpt.us/redux/05-counter.html 공부하기