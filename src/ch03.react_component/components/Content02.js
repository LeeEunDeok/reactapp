import { Component } from "react";

class App extends Component {
    render() {
        var tagList = []

        // 부모가 넘겨준 빵 객체들을 담고 있는 배열을 props로 전달 받았습니다.
        const breadList = this.props.breadList
        console.log(breadList)
        
        // Warning: Each child in a list should have a unique "key" prop.
        // 각각의 항목에 대하여 식별할 수 있는 key를 부여해 주세요.
        // key={breadList[i].id}

        for (var i = 0; i < breadList.length; i++) {
            const oneTag =
                <div key={breadList[i].id}>
                    <h4>{breadList[i].name}</h4>
                    <p>{breadList[i].description}</p>
                </div>

            tagList.push(oneTag)  // 요소 1개 추가
        }

        return (
            <nav>
                {tagList}
            </nav>
        )
    }
}

export default App