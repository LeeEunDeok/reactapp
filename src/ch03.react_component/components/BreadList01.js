import { Component } from "react";

class App extends Component {
    render() {
        // console.log('하하하');

        const breadList = [
            { id: 1, name: "프렌치 바게트", description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
                { id: 2, name: "크로와상", description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
                { id: 3, name: "브리오슈", description: "프랑스의 전통적인 달콤한 빵으로, 기름과 계란이 많이 들어가서 부드럽고 고소한 맛과 부드러운 식감이 특징입니다." },
                { id: 4, name: "치아바타", description: "빵 자체는 비교적 폭이 넓은 직사각형 모양을 띠며, 바삭하면서도 촉촉하고 부드러운 식감이 특징입니다." }
        ]
        
        // 자바 스크립트 배열 map() 공부
        // 화살표 함수(arrow functions) 공부
        // App_map_test.js 파일 참조
        const trList = breadList.map(one =>
            <tr key={one.id}>
                <td align="center">{one.id}</td>
                <td>{one.name}</td>
                <td>{one.description}</td>
            </tr>
        )

        return (
            <div align="left">
				<table border={1}>
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>세부 설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;