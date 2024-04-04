import Table from 'react-bootstrap/Table';

function App(props) {
	const contents = props.contents
	console.log(contents)
	
	const onClickToContent = props.onClickToContent

	const ClickedTd = (event) => {
		const memberId = event.target.parentNode.id
		onClickToContent(memberId)
	}

	function mkTbody (one, index) {
		const trTag = 
		<tr id={one.id} key={index}>
			<td onClick={ClickedTd}>{one.name}</td>
			<td onClick={ClickedTd}>{one.gender}</td>
			<td onClick={ClickedTd}>{one.address}</td>
		</tr>

		return trTag
	}

	const MemberList = () =>{
		const dataList = contents.map(mkTbody)
		return <tbody>{dataList}</tbody>
	}

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>이름</th>
					<th>성별</th>
					<th>주소</th>
				</tr>
			</thead>
			{MemberList()}
		</Table>
	);
}

export default App;