// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 
export const increase = () => (
    {
        type: INCREASE
    }
);
export const decrease = () => (
    {
        type: DECREASE
    }
);

// 초기 상태, 리듀서 함수 counter
const init = {
    number: 0
};

const counter = (state = init, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            }
        case DECREASE:
            return {
                number: state.number - 1
            }
        default:
            return state
    }
};
export default counter;