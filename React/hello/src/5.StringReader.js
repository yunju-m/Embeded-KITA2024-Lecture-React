import StringOperator from "./5.StringOperator";

function StringReader() {
    return (
        // 1. 유사엘리먼트 내부에 이벤트속성 이용
        // <p>
        //     문자열 : <input type='text' onKeyUp={StringOperator} />
        // </p>

        // 2. onChangeMode 속성 이용
        <StringOperator onChangeMode={
            function (e) {
                console.log('문자열 길이 : ' + e.target.value.length);
            }
        } />
    );
}

export default StringReader;