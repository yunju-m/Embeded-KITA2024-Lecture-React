import { Routes, Route, NavLink } from 'react-router-dom';
import JavascriptSub from './JavascriptSub';

function Javascript() {
    return (
        <>
            <div>
                <h2>Javascript 페이지</h2>
                <p>
                    <NavLink to='/javascript/1'>sub1</NavLink>&nbsp;
                    <NavLink to='/javascript/2'>sub2</NavLink>
                </p>
            </div>
            <Routes>
                <Route path='/:pid' element={<JavascriptSub />} />
            </Routes>
        </>
    );
}

export default Javascript;