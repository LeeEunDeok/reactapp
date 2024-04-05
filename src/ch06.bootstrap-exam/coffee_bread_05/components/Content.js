import Table from 'react-bootstrap/Table';

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

    function getProductList(item, index) {
        let hangul = ''; // 한글 이름

        // 차후 한글 이름과 영문 이름을 가진 객체를 사용하여 동적으로 개선 필요
        switch (item.category) {
            case 'bread':
                hangul = '빵';
                break;
            case 'beverage':
                hangul = '음료수';
                break;
            case 'cake':
                hangul = '케잌';
                break;
            default:
                break;
        }
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