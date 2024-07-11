// 1. function문법 component
// function ReactComponent() {
//     const message = 'Function문법 Component';
//     return (
//         <h1>{message}</h1>
//     );
// }


// 2. class문법 component
import { Component } from "react";
class ReactComponent extends Component {
    render() {
        const message = 'Class문법 Component';
        return (
            <h1>{message}</h1>
        );
    }
}

export default ReactComponent;