import { useState, useEffect } from "react";

function GetData() {
    const [todos, setTodos] = useState([]);
    const [selectTodo, setSelectTodo] = useState([]);

    useEffect(() => {
        fetch('https:jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(result => {
                setTodos(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <div>
            <select id='todoSel' onChange={selChange}>
                <option key='0' value=''>---전체---</option>
                {todos.map(todo => (
                    <option key={todo.id} value={todo.id}>todoID: {todo.id}</option>
                ))}
            </select> <br />
            <h2>선택한 Todo</h2>
            <p>사용자 아이디 : {selectTodo.userId}</p>
            <p>아이디 : {selectTodo.id}</p>
            <p>제목 : {selectTodo.title}</p>
            <p>완료여부 : {selectTodo.completed ? 'O' : ''}</p>
        </div >
    );

    function selChange(e) {
        const seltodo = e.target.value;
        if (seltodo) {
            setSelectTodo(todos[Number(e.target.value) - 1]);
        }
    }
}

export default GetData;