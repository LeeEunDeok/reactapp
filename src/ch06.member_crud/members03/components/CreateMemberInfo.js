import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App(props) {
    const receivedData = props.receivedData;
    const [gender, setGender] = useState('');
    const [marriage, setMarriage] = useState('');

    const genderChange = (event) => {
        setGender(event.target.id);
    }

    const marriageChange = (event) => {
        setMarriage(event.target.id);
    }

    const throwData = (event) => {
        event.preventDefault();
        const insertData = event.target;
        receivedData(insertData, gender, marriage);
    }

    return (
        <div>
            <h2>회원 추가</h2>
            <form action="#" method="post" onSubmit={throwData}>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">아이디</InputGroup.Text>
                    <Form.Control type="text" name="id"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
                    <Form.Control type="text" name="name"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">성별</InputGroup.Text>
                    <div className='mb-3'>
                        <Form.Check
                            inline
                            type="radio"
                            name='gender'
                            id="male"
                            label="남자"
                            onChange={genderChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            name='gender'
                            id="female"
                            label="여자"
                            onChange={genderChange}
                        />
                    </div>
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">생일</InputGroup.Text>
                    <Form.Control type="date" name="birth"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">결혼 유무</InputGroup.Text>
                    <div className='mb-3'>
                        <Form.Check
                            inline
                            type="radio"
                            name='marriage'
                            id="couple"
                            label="결혼"
                            onChange={marriageChange}
                        />
                        <Form.Check
                            inline
                            type="radio"
                            name='marriage'
                            id="single"
                            label="미혼"
                            onChange={marriageChange}
                        />
                    </div>
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">급여(월, 단위 : 만)</InputGroup.Text>
                    <Form.Control name="salary" type='number' aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">주소</InputGroup.Text>
                    <Form.Control type="text" name="address"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">사진</InputGroup.Text>
                    <Form.Control type="text" name="image"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <Button type="submit" value="등록">등록</Button>{' '}
            </form>
        </div>
    );
}

export default App;