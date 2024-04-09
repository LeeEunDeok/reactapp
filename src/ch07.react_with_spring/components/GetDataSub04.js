import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';

// 해당 카테고리를 가져오려면
// 1. useEffect Hook의 2번째 매개변수에 category 추가하기
// 2. url 변수에 슬래시와 category 추가하기

function App(props) {
    const [rcvData] = useState(props.receivedData); // 카테고리 품목
    const [category, setCategory] = useState('와인'); // 현재 카테고리 이름

    //-------------------------------------------------------------------------------------------------
    const [receivedData, setReceivedData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const FetchFunction = () => {
        const fetchData = async () => {
            try {
                setReceivedData(null);
                setError(null);

                // 인텔리제이 - 마이스트링부트 - ForReactController
                const url = 'http://localhost:8989/react/data/exam04/' + category;
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
    useEffect(FetchFunction, [category]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생</div>;
    if (!receivedData) return null;
    //-------------------------------------------------------------------------------------------------

    const ChangeCategory = (event) => {
        const targetId = event.target.id;
        setCategory(targetId);
    }

    const ProductList = () => {
        console.log('typeof rcvData : ' + typeof receivedData);
        console.log(receivedData);

        // 조건부 렌더링
        const UserList = receivedData ? receivedData.map(oneData => (
            <tr id={oneData.image} key={oneData.id}>
                <td id={oneData.description} align='center'>{oneData.id}</td>
                <td id={oneData.description}>{oneData.name}</td>
                <td id={oneData.description} align='center'>{(oneData.price ? oneData.price.toLocaleString() : 0) + '원'}</td>
                <td id={oneData.description}>{oneData.category}</td>
                <td id={oneData.description}>{oneData.stock + '개'}</td>
                <td id={oneData.description}>{oneData.sellStatus}</td>
            </tr>
        )) : [];

        return <tbody>{UserList}</tbody>
    };

    return (
        <>
            <ButtonGroup aria-label="Basic example">
                {/* 넘어온 데이터를 이용하여 동적으로 버튼 그룹 생성 */}
                {rcvData.map((category, index) => (
                    <Button variant="secondary" key={index} id={category} onClick={ChangeCategory}>
                        {category}
                    </Button>
                ))}
            </ButtonGroup>
            현재 카테고리 : {category}
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center">아이디</th>
                        <th className="text-center">이름</th>
                        <th className="text-center">가격</th>
                        <th className="text-center">카테고리</th>
                        <th className="text-center">재고</th>
                        <th className="text-center">상태</th>
                    </tr>
                </thead>
                <ProductList />
            </Table>
        </>
    );
}
export default App;