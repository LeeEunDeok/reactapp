import './css/App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import SubComponent from './components/GetDataSub04';

function App() {
    const [receivedData, setReceivedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const FetchFunction = () => {
        const fetchData = async () => {
            try {
                setReceivedData(null);
                setError(null);

                // 인텔리제이 - 마이스트링부트 - ForReactController
                const url = 'http://localhost:8989/react/data/exam04';
                const response = await axios.get(url);

                setReceivedData(response.data);
                console.log(response.data);

                setLoading(true);

            } catch (err) {
                console.log(err)
                setError(err);
            }

            setLoading(false);

        };

        fetchData(); // 함수 호출
    };

    // 두번째 매개변수가 빈 배열이면 한 번만 렌더링
    useEffect(FetchFunction, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생</div>;
    if (!receivedData) return null;

    return (
        <div>
            <h2>카테고리별 조회</h2>
            <SubComponent receivedData={receivedData} />
        </div>
    );
}
export default App;