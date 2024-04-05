import { Table } from 'react-bootstrap';

function App(props) {
    const product = props.selectedProduct;
    console.log('product');
    console.log(product);

    // 리액트에서 클래스의 속성 이름은 반드시 className으로 사용 해야 합니다.
    // 이유는 JSX가 JavaScript의 특수 형태의 구문이기 때문입니다.

    return (

        <div className="table_padding">
            <Table>
                <tbody>
                    <tr>
                        <td width="40%">
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td className="left">아이디</td>
                                        <td className="middle">{product.id}</td>
                                    </tr>
                                    <tr>
                                        <td>이름</td>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td>단가</td>
                                        <td>{product.price.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>카테고리</td>
                                        <td>{product.category === 'bread' ? '빵' : '음료수'}</td>
                                    </tr>
                                    <tr>
                                        <td>재고</td>
                                        <td>{product.stock}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                        <td>
                            <img src={'/images/' + product.image} alt={product.name} width="210" height="210" />
                        </td>
                        <td>
                            <p className="description">
                                {product.description}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default App;