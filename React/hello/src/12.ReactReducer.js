// React Reducer

import { useReducer } from 'react';

function ReactReducer() {

    // 1. state 2. dispatcher 3. reducer 4. state초기값
    const [count, dispatcher] = useReducer(reducer, 0);

    // dispatcher(명령)
    function decrement() { dispatcher('decrement'); }
    function increment() { dispatcher('increment'); }
    function initialize() { dispatcher('initialize'); }

    return (
        <div>
            <p>
                <button value='-' onClick={decrement}>감소</button>&nbsp;
                <button value='0' onClick={initialize}>초기화</button>&nbsp;
                <button value='+' onClick={increment}>증가</button>&nbsp;
                <span>{count}</span>
            </p>
        </div>
    );
}

// 명령을 전달받아서 상태를 반환하는 reducer
function reducer(count, action) {
    switch (action) {
        case 'decrement':
            return count - 1;
        case 'increment':
            return count + 1;
        case 'initialize':
            return 0;
        default:
    }
}

export default ReactReducer;