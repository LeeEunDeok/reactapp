import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function App(props) {
    const [rcvData] = useState(props.receivedData);

    const ProductList = () => {
        console.log('typeof rcvData : ' + typeof rcvData);
        console.log(rcvData);

        // 조건부 렌더링
        const UserList = rcvData ? rcvData.map(oneData => {
            const total = oneData.kor + oneData.eng + oneData.math;

            // JavaScript에서 특정 소수 자릿수까지 값을 표현하려면 toFixed() 메서드를 사용할 수 있습니다.
            const avg = (total / 3.0).toFixed(2);

            return <tr key={oneData.id}>
                <td align='center'>{oneData.id}</td>
                <td align='center'>{oneData.name}</td>
                <td align='center'>{oneData.kor}</td>
                <td align='center'>{oneData.eng}</td>
                <td align='center'>{oneData.math}</td>
                <td align='center'>{total + '점'}</td>
                <td align='center'>{avg + '점'}</td>
            </tr>
        }) : [];

        return <tbody>{UserList}</tbody>
    };

    return (
        <>
            <h2>학생들 성적표</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center">아이디</th>
                        <th className="text-center">이름</th>
                        <th className="text-center">국어</th>
                        <th className="text-center">영어</th>
                        <th className="text-center">수학</th>
                        <th className="text-center">총점</th>
                        <th className="text-center">평균</th>
                    </tr>
                </thead>
                <ProductList />
            </Table>
        </>
    );
}
export default App;