import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function App(props) {
    const onSubmitUpdate = props.onSubmitUpdate;

    // 사용자가 선택한 행(row) 정보
    // 사용자가 이 값을 변경할 수 있으므로 상태(state) 관리를 해줘야 합니다.
    const [formData, setFormData] = useState(props.formData);

    /*
        각 입력 양식에 대하여
        1. value 속성 값을 채워야 합니다.
        2. onChange 이벤트에 대한 event handler를 작성합니다.
            onChange={xxx}
            xxx 화살표 함수 구현

        폼 양식에 대하여
        1. onSubmit 이벤트 및 event handler를 작성합니다.
            onSubmit={yyy}
            yyy 화살표 함수 구현
    */

    const InputChange = (event) => {
        // 이 event handler는 입력 양식의 값이 변경될 때마다 실행 됩니다. 
        const { name, value } = event.target; // 현재 편집중인 form 양식

        // previous는 이전 폼 정보
        // 이전 정보는 보존하고, 수정한 정보만 update 해야하므로 전개 연산자(spread operator)를 반드시 사용해야 합니다.
        setFormData(previous => ({ ...previous, [name]: value }));
    }

    const SubmittedData = () => {
        // 수정된 폼 정보를 App으로 넘깁니다.
        onSubmitUpdate(formData);
    }

    return (
        <div>
            <h2>수정하기</h2>
            <form action="#" method="post" onSubmit={SubmittedData}>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">아이디</InputGroup.Text>

                    <input type="hidden" name="id" onChange={InputChange} value={formData.id} />

                    <Form.Control type="text" name="id"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" onChange={InputChange} value={formData.id} disabled />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
                    <Form.Control type="text" name="name"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" onChange={InputChange} value={formData.name} />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">가격</InputGroup.Text>
                    <Form.Control type="text" name="price"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" onChange={InputChange} value={formData.price} />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">카테고리</InputGroup.Text>
                    <Form.Select size="sm" name="category" aria-label="카테고리 선택" onChange={InputChange} >
                        <option>카테고리를 선택해 주세요.</option>

                        <option value={formData.category === 'bread'} selected>빵</option>

                        <option value={formData.category === 'beverage'} selected>음료수</option>

                    </Form.Select>
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" onChange={InputChange} value={formData.stock} />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" onChange={InputChange} value={formData.image} />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">부가 설명</InputGroup.Text>
                    <Form.Control name="description" as="textarea" style={{ height: '100px' }} aria-describedby="basic-addon1 inputGroup-sizing-sm" onChange={InputChange} value={formData.description} />
                </InputGroup>
                <Button type="submit" value="수정">수정</Button>{' '}
            </form>
        </div>
    );
}
export default App;