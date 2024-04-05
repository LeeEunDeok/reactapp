import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App(props) {
    const onSubmitInsert = props.onSubmitInsert;

    // 기존의 hard coding된 카테고리 목록을 동적으로 생성시켜 만들어 줍니다.
    const categories = props.categories;

    // 카테고리 목록은 콤보 박스(<select> 태그)에 놓여야 하므로 <option> 태그로 작성하면 좋습니다.
    // 카테고리 목록은 배열이므로 map() 함수를 사용하면 됩니다.
    // {item.key},{item.value}는 CreateCategory.js 파일에 준하여 코딩했습니다.
    const cateList = categories.map((item, index) =>
        <option key={index} value={item.key}>{item.value}</option>
    );

    const SubmittedData = (event) => {
        console.log('CreateContent-SubmittedData-called');
        event.preventDefault();
        const formObject = event.target; // formObject : 폼 그 자체

        onSubmitInsert(formObject);
    }



    return (
        <div>
            <h2>생성하기</h2>
            <form action="#" method="post" onSubmit={SubmittedData}>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
                    <Form.Control type="text" name="name"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">가격</InputGroup.Text>
                    <Form.Control type="text" name="price"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">카테고리</InputGroup.Text>
                    <Form.Select size="sm" name="category" aria-label="카테고리 선택">
                        <option>카테고리를 선택해 주세요.</option>
                        {cateList} {/* 동적으로 생성됨 */}
                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">부가 설명</InputGroup.Text>
                    <Form.Control name="description" as="textarea" style={{ height: '100px' }} aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <Button type="submit" value="생성">생성</Button>{' '}
            </form>
        </div>
    );
}
export default App;