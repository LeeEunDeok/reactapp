import './css/App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';

import SubComponent from './components/GetDataSub06';
import MyChart from './components/Chart06';

// Mission!!!
// 임의의 행을 클릭했을 때, 해당 학생의 국영수 과목을 파이 그래프로 그려 보세요.
// 과목이 하나 더 추가되었다고 가정하고, 코드를 수정해 보세요.

function App() {
    const [pageNumber, setPageNumber] = useState(1); // 페이징의 페이지 번호
    
    const [receivedData, setReceivedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const FetchFunction = () => {
        const fetchData = async () => {
            try {
                setReceivedData(null);
                setError(null);

                // 인텔리제이 - 마이스트링부트 - ForReactController
                const url = 'http://localhost:8989/react/data/exam06/' + pageNumber;
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

    // pageNumber가 바뀔때마다 렌더링
    useEffect(FetchFunction, [pageNumber]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생</div>;
    if (!receivedData) return null;

    const PaginationChange = (event) => {
        const targetId = event.target.id;
        console.log('클릭한 번호 : ' + targetId);

        // 주의 !! 문자로 인식하니까 Number()로 바꾸기 !!
        setPageNumber(Number(targetId));
    }

    const FillPagination = () => {
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} id={number} onClick={PaginationChange} active={number === pageNumber}>
                    {number}
                </Pagination.Item>
            );
        }
        return items;
    }

    return (
        <div>
            <div>
                <Pagination>{FillPagination()}</Pagination>
            </div>
            <SubComponent receivedData={receivedData} />
            <MyChart data={receivedData} />
        </div>
    );
}
export default App;