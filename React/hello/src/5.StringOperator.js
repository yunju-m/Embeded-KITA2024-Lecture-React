function StringOperator(props) {
    // 1. 유사엘리먼트 내부에 이벤트속성 이용
    // console.log('문자열 길이 : ' + e.target.value.length);

    // 2. onChangeMode 속성 이용   
    return (
        <p>
            문자열 : <input type='text' onKeyUp={props.onChangeMode} />
        </p>
    );
}

export default StringOperator