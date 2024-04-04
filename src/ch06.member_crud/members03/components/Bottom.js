import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App(props) {
	const onClickToBottom = props.onClickToBottom

	const ClickedButton = (event) => {
		const id = event.target.id;
		onClickToBottom(id);
	}

	return (
		<div>
			<ButtonGroup aria-label="Basic example">
				<Button variant="secondary" id='get_insert' onClick={ClickedButton}>등록</Button>
				<Button variant="secondary" id='get_update' onClick={ClickedButton}>수정</Button>
				<Button variant="secondary" id='get_delete' onClick={ClickedButton}>삭제</Button>
				<Button variant="secondary" id='get_add_category' onClick={ClickedButton}>카테고리 추가</Button>
			</ButtonGroup>
			<br />
			{props.message}
		</div>
	);
}

export default App;