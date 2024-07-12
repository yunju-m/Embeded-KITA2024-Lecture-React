import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

function JavascriptSub() {
    const params = useParams();
    const pid = params.pid;
    if (pid === '1' || pid === '2') {
        return (
            <div>
                <h3>Javascript sub page {pid}</h3>
            </div>
        );
    } else {
        return (
            <NotFound />
        );
    }
}

export default JavascriptSub;