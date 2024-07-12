import '../css/Header.css';

function Header(props) {
    return (
        <header>
            <h1>{props.titleText}</h1>
        </header>
    );
}

export default Header;