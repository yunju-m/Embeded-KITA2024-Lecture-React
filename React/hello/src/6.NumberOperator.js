function NumberOperator(props) {
    return (
        <>
            숫자1 : <input id='num1' type="text" />&nbsp;
            숫자2 : <input id='num2' type="text" />&nbsp;
            <input id='btn' type="button" value="합계" onClick={props.onChangeMode} />
            <span id="result"></span>
        </>
    );
}

export default NumberOperator;