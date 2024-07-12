import '../css/Nav.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Javascript from './Javascript';
import Typescript from './Typescript';
import React from './React';
import NotFound from './NotFound';

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink>&nbsp;</li>
                    <li><NavLink to='/javascript'>Javascript</NavLink>&nbsp;</li>
                    <li><NavLink to='/typescript'>Typescript</NavLink>&nbsp;</li>
                    <li><NavLink to='/react'>React</NavLink><br /></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/javascript' element={<Javascript />} />
                <Route path='/javascript/*' element={<Javascript />} /> {/* nested router */}
                <Route path='/typescript' element={<Typescript />} />
                <Route path='/react' element={<React />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default Nav;