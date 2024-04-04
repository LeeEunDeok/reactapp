import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App(props) {
    const onClickToBottom = props.onClickToBottom;

    const ClickMenu = (event) => {
        event.preventDefault(); // 혹시 모를 이벤트 전파 방지

        const targetId = event.target.id;
        onClickToBottom(targetId);
    }

    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" id='get_insert' onClick={ClickMenu}>생성</Button>{' '}
                <Button variant="secondary" id='get_update' onClick={ClickMenu}>수정</Button>{' '}
                <Button variant="secondary" id='get_delete' onClick={ClickMenu}>삭제</Button>{' '}
                <Button variant="secondary" id='get_category_add' onClick={ClickMenu}>카테고리 추가</Button>
            </ButtonGroup>
            <br />
            {props.message}
        </div>
    );
}
export default App;