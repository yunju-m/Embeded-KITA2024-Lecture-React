import { useReducer } from 'react';

const ReactCalc = () => {
    const [result, dispatcher] = useReducer(reducer, 0);

    const plusFunc = () => {
        dispatcher('plus');
    }
    const minusFunc = () => {
        dispatcher('minus');
    }
    const multiFunc = () => {
        dispatcher('multi');
    }
    const divideFunc = () => {
        dispatcher('divide');
    }

    return (
        <div>
            <input id='num1' type='text' />&nbsp;
            <input id='num2' type='text' />&nbsp;
            <button value='+' onClick={plusFunc}>더하기</button>&nbsp;
            <button value='-' onClick={minusFunc}>빼기</button>&nbsp;
            <button value='*' onClick={multiFunc}>곱하기</button>&nbsp;
            <button value='/' onClick={divideFunc}>나누기</button> <br />
            <span>결과: {result}</span>
        </div>
    );
}

const reducer = (_, action) => {
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    switch (action) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'multi':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 0;
        default:
            return '올바르지 않은 계산식입니다.';
    }
}

export default ReactCalc;