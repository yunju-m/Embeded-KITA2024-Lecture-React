import './css/Main.css';
import Header from './sub/Header';
import Nav from './sub/Nav';
import Footer from './sub/Footer';

function Main() {
    const titleText = 'My React Website';
    const menus = ['Home', 'Javascript', 'Typescript', 'React'];
    const footerText = 'Copyright "(c) 2024 All right reversed ME';
    return (
        <div id='wrapper'>
            <Header titleText={titleText} />
            <Nav menus={menus} />
            <Footer footerText={footerText} />
        </div>
    );
}

export default Main;