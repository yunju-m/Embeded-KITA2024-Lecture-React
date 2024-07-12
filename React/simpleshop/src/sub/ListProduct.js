import '../css/ListProduct.css'
// import Product from './Product';
import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import DetailProduct from './DetailProduct';
import NotFound from './NotFound';
import Main from '../Main';

// const productList = [];

function ListProduct() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/productsAPI.txt')
            .then(response => response.json())
            .then(result => {
                setProducts(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const gotoDetail = (pno) => {
        return (
            <NavLink to={`/product/${pno}`}></NavLink>
        );
    }

    return (
        <div id='productList'>
            {products.map(
                product =>
                    <article key={product.pno} onClick={() => gotoDetail(product.pno)}>
                        <img src={`/img/${product.pimg}`} alt={product.pno} />
                        <p>{product.ptitle}</p>
                        <p>{product.pprice}</p>
                    </article>
            )}
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/:pid' element={<DetailProduct />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div >
    );
}

export default ListProduct;