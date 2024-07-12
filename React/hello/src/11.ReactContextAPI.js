// Context API

import { createContext, useContext } from "react";

const obj = {
    name: '홍길동',
    age: 20
}

// 1. 컨텍스트 생성
const context = createContext(obj);

function ReactContextAPI() {
    return (
        <GreandParentComponent />
    );
}

function GreandParentComponent() {
    // 2. useContext훅 생성
    const useCon = useContext(context);
    return (
        // context제공자 생성
        // context.Provider 내부의 컴포넌트부터 value를 적용
        <context.Provider value={{ name: '강감찬', age: 30 }}>
            <div id="grandParent">
                <p>GreandParentComponent : {useCon.name} {useCon.age}</p>
                <ParentComponent />
            </div>
        </context.Provider>
    );
}

function ParentComponent() {
    const useCon = useContext(context);
    return (
        <context.Provider value={{ name: '이순신', age: 50 }}>
            <div id="parent">
                <p>ParentComponent : {useCon.name} {useCon.age}</p>
                <ChildComponent />
            </div>
        </context.Provider>
    );
}

function ChildComponent() {
    const useCon = useContext(context);
    return (
        <div id="child">
            <p>ChildComponent : {useCon.name} {useCon.age}</p>
        </div>
    );
}

export default ReactContextAPI;