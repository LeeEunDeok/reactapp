import { Component } from "react";

class App extends Component {
    render() {
        const coffeLlist = [
            {id:1, name:"아메리카노", description:"에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다."},
            {id:2, name:"카푸치노", description:"스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다."},
            {id:3, name:"에스프레소", description:"이탈리아에서 탄생한 진한 맛의 커피 음료입니다. 뜨거운 물을 고압으로 강제로 통과시켜 만들어지는데, 이 때문에 일반적인 커피보다 맛이 진하고 향도 풍부합니다."},
            {id:4, name:"카페 모카", description:"초콜릿 시럽을 더해 부드러운 달콤한 맛을 더해주며, 에스프레소와 스팀밀크로 인해 진한 커피 향이 살아나는 것이 특징입니다."},
            {id:5, name:"바닐라 라떼", description:"스팀밀크에 바닐라 시럽을 더해서 만든 커피 음료입니다. 부드러운 스팀밀크와 달콤한 바닐라 시럽이 조화를 이루며, 쓴 커피 향을 중화시켜 부드러운 맛을 느낄 수 있습니다."}
         ];

         const trList = coffeLlist.map(one =>
                <tr key={one.id}>
                    <td align="center">{one.id}</td>
                    <td>{one.name}</td>
                    <td>{one.description}</td>
                </tr>
            );

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