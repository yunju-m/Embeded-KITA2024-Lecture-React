// React Router Dom

import './App.css';
import { Routes, Route, Link, NavLink, useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <div>
          <h3>1. a 링크😥</h3>
          <a href='/'>Home</a>&nbsp;
          <a href='/javascript'>Javascript</a>&nbsp;
          <a href='/typescript'>Typescript</a>&nbsp;
          <a href='/react'>React</a> <br />

          <h3>2. Link 링크😊</h3>
          <Link to='/'>Home</Link>&nbsp;
          <Link to='/javascript'>Javascript</Link>&nbsp;
          <Link to='/typescript'>Typescript</Link>&nbsp;
          <Link to='/react'>React</Link><br />

          <h3>3. NavLink 링크😍</h3>
          <NavLink to='/'>Home</NavLink>&nbsp;
          <NavLink to='/javascript'>Javascript</NavLink>&nbsp;
          <NavLink to='/typescript'>Typescript</NavLink>&nbsp;
          <NavLink to='/react'>React</NavLink><br />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/javascript' element={<Javascript />} />
        <Route path='/javascript/*' element={<Javascript />} /> {/* nested router */}
        <Route path='/typescript' element={<Typescript />} />
        <Route path='/react' element={<React />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home 페이지</h2>
    </div>
  );
}

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

function JavascriptSub() {
  const params = useParams();
  const pid = params.pid;
  if (pid === '1' || pid === '2') {
    return (
      <div>
        <h3>Javascript 서브페이지 {pid}</h3>
      </div>
    );
  } else {
    return (
      <NotFound />
    );
  }
}

function Typescript() {
  return (
    <div>
      <h2>Typescript 페이지</h2>
    </div>
  );
}

function React() {
  return (
    <div>
      <h2>React 페이지</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 Not Found! 페이지를 찾을 수 없습니다.</h2>
    </div>
  );
}


export default App;
