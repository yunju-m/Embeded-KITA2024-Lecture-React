import NumberOperator from "./6.NumberOperator";

function NumberCounter() {
    return (
        <NumberOperator onChangeMode={
            function () {
                const num1 = Number(document.querySelector('#num1').value);
                const num2 = Number(document.querySelector('#num2').value);
                const result = document.querySelector('#result');
                result.innerHTML = num1 + num2;
            }
        } />
    );
}

export default NumberCounter;