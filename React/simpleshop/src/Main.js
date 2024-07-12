import './css/Main.css';
import Header from './sub/Header';
import Footer from './sub/Footer';
import ListProduct from './sub/ListProduct';

function Main() {
    const titleText = 'SimpleShop v0.1';
    const footerText = 'Copyright "(c) 2024 All right reversed ME';

    return (
        <div id='wrapper'>
            <Header titleText={titleText} />
            <ListProduct />
            <Footer footerText={footerText} />
        </div>
    );
}

export default Main;