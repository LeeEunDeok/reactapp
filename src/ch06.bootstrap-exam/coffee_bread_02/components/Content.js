import Table from 'react-bootstrap/Table';

function App(props) {
    const contents = props.contents;

    // 테이블의 행(tr)을 클릭했습니다.
    const onClickToContent = props.onClickToContent;

    const ClickItem = (event) => {
        console.log('Content-ClickItem-called');

        const parentNodeId = event.target.parentNode.id;
        console.log('parentNodeId : ' + parentNodeId);

        onClickToContent(parentNodeId);
    }

    function getProductList(item, index) {
        const trTag =
            <tr id={item.id} key={index}>
                <td onClick={ClickItem}>{item.name}</td>
                {/* toLocaleString() : 숫자 유형에 콤마 넣기 */}
                <td onClick={ClickItem}>{item.price.toLocaleString()}</td>
                <td onClick={ClickItem}>{item.category === 'bread' ? '빵' : '음료수'}</td>
            </tr>;

        return trTag;
    }

    const ProductList = () => {
        // getProductList 함수를 사용하여 배열을 반복합니다.
        const dataList = contents.map(getProductList);
        return <tbody>{dataList}</tbody>;
    }

    return (
        <div>
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