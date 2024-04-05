import {Form, InputGroup, Button} from 'react-bootstrap';

function App(props){
    const onSubmitCategoryAdd = props.onSubmitCategoryAdd;

    const SubmitCategory = (event) => {
        console.log('CreateCategory-SubmitCategory-called');
        const formObject = event.target;
        onSubmitCategoryAdd(formObject);
    }

	return (
        <div>
            <h2>카테고리 추가</h2>
            <form action="" method="post" onSubmit={SubmitCategory}>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">영문 이름</InputGroup.Text>
                    <Form.Control type="text" name="key"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="basic-addon1">한글 이름</InputGroup.Text>
                    <Form.Control type="text" name="value"
                        aria-describedby="basic-addon1 inputGroup-sizing-sm" />
                </InputGroup>
                <Button type="submit" value="카테고리 추가">
                    카테고리 추가
                </Button>{' '}
            </form>
        </div>
    );
}
export default App ;