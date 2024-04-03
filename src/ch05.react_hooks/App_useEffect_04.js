import { useState, useEffect } from "react";
import './../App.css';

/*
	fetch Api는 네트워크 요청을 수행한 결과값을 Promise 객체로 반환합니다.
	이 데이터를 React에서 활용할 수 있습니다.
	Promise 객체는 비동기 통신 처리의 작업 결과가 들어있는 객체입니다.
*/

function App() {
	// 사이트에서 다운 받은 정보를 저장할 Empty Array
	const [receivedData, setReceivedData] = useState([]);

	const GetUrlData = () => {
		// 비동기 통신을 사용하여 데이터 정보를 읽어오고 state를 변경합니다.
		const url = 'https://jsonplaceholder.typicode.com/photos';
		fetch(url)
			.then(response => response.json())
			.then(data => {
				setReceivedData(data);
				// console.log(data);
			})
	}

	useEffect(GetUrlData, []);

	console.log(receivedData.length)
	console.log(receivedData[0]);

	const DataList = () => {
		// 앞 10개만 추출하기
		const newArray = receivedData.slice(0, 10);

		const rcvData = newArray.map(item =>
			<li key={item.id}>
				{item.title}
				<br />
				(<a href={item.thumbnailUrl}>{item.thumbnailUrl}</a>)
			</li>
		)

		return <ol>{rcvData}</ol>
	}

	return (
		<div>
			<DataList />
		</div>
	)
}
export default App;