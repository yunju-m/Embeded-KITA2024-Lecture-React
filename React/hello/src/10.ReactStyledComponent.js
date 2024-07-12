// Styled Component

import styled from 'styled-components';

function ReactStyledComponent() {
    const CommonButton = props => {
        return <button className={props.className}>{props.children}</button>
    }
    const StyledCommonButton = styled(CommonButton)`font-size: 2em`;

    // 동적스타일 변경
    const DynamicButton = props => {
        return <button className={props.className}>{props.children}</button>
    }
    const StyledDynamicButton = styled(DynamicButton)`
        font-size: ${function (props) {
            return props.fs + 'em';
        }
        }
    `;

    return (
        <>
            <CommonButton>CommonButton</CommonButton>
            <StyledCommonButton>StyledCommonButton</StyledCommonButton>
            <NoUseStyledComponent />
            <UseStyledComponent />
            <DynamicButton>DynamicButton</DynamicButton>
            <StyledDynamicButton fs='5'>StyledDynamicButton</StyledDynamicButton>
        </>
    );
}

function NoUseStyledComponent() {
    const style = {
        fontSize: '2em',
        color: 'white',
        backgroundColor: 'skyblue'
    }
    return (
        <>
            <div style={style}>NoUseStyledComponent</div>
        </>
    );
}

// styled-component 적용
function UseStyledComponent() {
    const StyledDiv = styled.div`
        font-size: 3em;
        color: yellow;
        background-color: black;
    `;
    // 기존 컴포넌트(StyledDiv)에 스타일을 추가한 div
    const StyledDiv2 = styled(StyledDiv)`
    border: 3px dotted yellow;
    text-align:center;
    `;
    return (
        <>
            <StyledDiv>StyledDiv</StyledDiv>
            <StyledDiv2>StyledDiv2</StyledDiv2>
        </>
    );
}

export default ReactStyledComponent;