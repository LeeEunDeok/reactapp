import Table from 'react-bootstrap/Table';
import { Dropdown, ListGroup } from 'react-bootstrap';

function App(props) {
    const contents = props.contents;
    console.log(contents);

    // 테이블의 행(tr)을 클릭했습니다.
    const onClickToContent = props.onClickToContent;

    const ClickItem = (event) => {
        console.log('Content-ClickItem-called');

        const parentNodeId = event.target.parentNode.id;
        console.log('parentNodeId : ' + parentNodeId);

        onClickToContent(parentNodeId);
    }

    const category = props.category;

    function getProductList(item, index) {
        let hangul = ''; // 한글 이름

        const findCategory = category.find(one => item.category === one.key);
        hangul = findCategory.value;

        console.log('영어 이름 : ' + findCategory.key);
        console.log('한글 이름 : ' + hangul);

        const trTag =
            <tr id={item.id} key={index}>
                <td onClick={ClickItem}>{item.name}</td>
                {/* toLocaleString() : 숫자 유형에 콤마 넣기 */}
                <td onClick={ClickItem}>{item.price.toLocaleString()}</td>
                <td onClick={ClickItem}>{hangul}</td>
            </tr>;

        return trTag;
    }

    const ProductList = () => {
        // getProductList 함수를 사용하여 배열을 반복합니다.
        const dataList = contents.map(getProductList);
        return <tbody>{dataList}</tbody>;
    }

    // 정렬과 관련된 프롭스
    const onOrderByClick = props.onOrderByClick;
    const orderInfo = props.orderInfo;

    const ClickButtonGroup = (event) => {
        console.log('Content-ClickButtonGroup-called');
        event.preventDefault();

        const targetId = event.target.id;
        console.log('event.target.id : ' + targetId);

        if (targetId === 'asc' || targetId === 'desc') { // '정렬 방식' 클릭됨
            onOrderByClick(orderInfo.column, targetId);

        } else { // '정렬할 컬럼' 클릭됨
            onOrderByClick(targetId, orderInfo.ordering);

        }
    }

    return (
        <div>
            <Table>
                <tbody>
                    <tr>
                        <td width="10%" valign="middle">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">정렬할 컬럼</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item id="name" onClick={ClickButtonGroup}>이름</Dropdown.Item>

                                    <Dropdown.Item id="price" onClick={ClickButtonGroup}>가격</Dropdown.Item>

                                    <Dropdown.Item id="category" onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign="middle">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">정렬 방식</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item id="asc" onClick={ClickButtonGroup}>오름차순</Dropdown.Item>

                                    <Dropdown.Item id="desc" onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign="middle">
                            <ListGroup horizontal>
                                <ListGroup.Item style={{marginRight : '-10px'}}>
                                    정렬할 컬럼 : {orderInfo.column}
                                </ListGroup.Item>
                                <ListGroup.Item style={{marginRight : '-100px'}}>
                                    정렬 방식 : {orderInfo.ordering === 'asc' ? '오름차순' : '내림차순'}
                                </ListGroup.Item>
                            </ListGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>카테고리</th>
                    </tr>
                </thead>
                {ProductList()}
            </Table>
        </div>

    );
}
export default App;