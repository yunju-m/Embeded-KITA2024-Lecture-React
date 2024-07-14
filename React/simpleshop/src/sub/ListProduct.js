import '../css/ListProduct.css'
import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import DetailProduct from './DetailProduct';

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

    return (
        <div id='productList'>
            {products.map(
                product =>
                    <article key={product.pno}>
                        <NavLink to={`/product/${product.pno}`} state={{ product }}>
                            <img src={`/img/${product.pimg}`} alt={product.pno} className='productListImg' />
                            <p>{product.ptitle}</p>
                            <p>{product.pprice}원</p>
                        </NavLink>
                    </article>
            )}
            <Routes>
                <Route path='/product/:pid' element={<DetailProduct />} />
            </Routes>
        </div >
    );
}

export default ListProduct;