import {useState, useEffect} from "react";
import './../App.css';

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timer = setTimeout(() => {
			setCount((count) => count + 1);
			console.log('setTimeout called');
		}, 1000);

		/* 바로 아래 코드를 주석처리하고, 테스트 요망 */
		return () => {
			clearTimeout(timer);
			console.log('clearTimeout called');
		}

		console.log('something to do list');
	}, []); /* 두 번째 매개 변수 , [] 를 없애고 테스트 요망 */

	return (
		<>
			<h1>I've rendered {count} times!</h1>
		</>
	)
}
// useEffect(aa)		useEffect(aa, [])		useEffect(aa, [prop,state])
// 기본적으로 무한 렌더링, 빈 배열이면 1번만 렌더링, 매개변수 있는 배열이면 매개변수의 값이 변경될 때마다 렌더링
export default App;
