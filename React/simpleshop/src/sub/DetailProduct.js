import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import '../css/DetailProduct.css';

function DetailProduct() {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <NotFound />;
    }

    return (
        <div className='detailProduct'>
            <div className='product-container'>
                <div className='img-container'>
                    <img src={`/img/${product.pimg}`} alt={product.pno} className='productDetailImg' />
                </div>
                <div className='content-container'>
                    <h1>{product.ptitle}</h1>
                    <div className='price-container'>
                        <p>판매가 : {product.pprice}원</p>
                    </div>
                    <div className='product-detail-container'>
                        <h3>상품 설명</h3>
                        <p>{product.pcontent}</p>
                    </div>
                </div>
            </div>
            <div className='btn-container'>
                <button id='listBtn' onClick={gotoList}>목록</button>
            </div>
        </div>
    );

    function gotoList(e) {
        e.preventDefault();
        window.location.href = '/';
    }
}

export default DetailProduct;