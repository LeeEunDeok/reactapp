import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

function App(props) {
    const [rcvData] = useState(props.receivedData);
    const [image, setImage] = useState('no_image');
    const [description, setDescription] = useState('');

    const AnotherView = (event) => {
        setDescription(event.target.id);
        setImage(event.target.parentNode.id);

        // for(const evt in event.target){
        //     console.log(evt);
        // }
    }

    const ProductList = () => {
        console.log('typeof rcvData : ' + typeof rcvData);
        console.log(rcvData);

        // 조건부 렌더링
        const UserList = rcvData ? rcvData.map(oneData => (
            <tr id={oneData.image} key={oneData.id}>
                <td id={oneData.description} align='center' onClick={AnotherView}>{oneData.id}</td>
                <td id={oneData.description} onClick={AnotherView}>{oneData.name}</td>
                <td id={oneData.description} align='center' onClick={AnotherView}>{(oneData.price ? oneData.price.toLocaleString() : 0) + '원'}</td>
                <td id={oneData.description} onClick={AnotherView}>{oneData.category}</td>
                <td id={oneData.description} onClick={AnotherView}>{oneData.stock + '개'}</td>
                <td id={oneData.description} onClick={AnotherView}>{oneData.sellStatus}</td>
            </tr>
        )) : [];

        return <tbody>{UserList}</tbody>
    };

    return (
        <>
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
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <Image src={'/images/' + image} alt='항목을 클릭하세요.' width={300} height={300} thumbnail />
                        </td>
                        <td colSpan={3}>
                            {description}
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </>
    );
}
export default App;