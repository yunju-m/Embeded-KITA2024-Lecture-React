import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

function DetailProduct() {
    const params = useParams();
    const pid = params.pid;
    return (
        <div>
            <h2>Detail페이지입니다. {pid}</h2>
        </div>
    );
}

export default DetailProduct;