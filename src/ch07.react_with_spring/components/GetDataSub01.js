import '../css/App.css';

import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
import Fade from 'react-bootstrap/Fade';
import { useState } from 'react';

function App(props) {
    const rcvData = props.receivedData;

    const [open, setOpen] = useState(false);

    return (
        <>
            <h2>상품 {rcvData.id}번 상세 보기</h2>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>{rcvData.id}</td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td>{rcvData.name}</td>
                    </tr>
                    <tr>
                        <td>가격</td>
                        <td>{rcvData.price.toLocaleString() + '원'}</td>
                    </tr>
                    <tr>
                        <td>카테고리</td>
                        <td>{rcvData.category}</td>
                    </tr>
                    <tr>
                        <td>재고</td>
                        <td>{rcvData.stock}</td>
                    </tr>
                    <tr>
                        <td>상태</td>
                        <td>{rcvData.sellStatus}</td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    그림을 보시려면 클릭하세요.
                </Button>
            </div>
            {/* https://react-bootstrap.github.io/docs/utilities/transitions/ */}
            <Fade in={open}>
                <div id="example-collapse-text">
                    <Table borderless>
                        <tbody>
                            <tr>
                                <td>
                                    <Image src={'/images/' + rcvData.image} alt="" thumbnail />
                                </td>
                                <td>{rcvData.description}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Fade>
        </>
    );
}
export default App;