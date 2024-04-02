import { Component } from "react";

import Top from "./components/Top02";
import Content from "./components/Content02";
import Bottom from "./components/Bottom02";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 여기에 state 정의
            top: { greeting: "인사말", welcome: "어서 오세요. 저희 빵집을 방문해 주셔서 감사합니다." },
            breadList: [
                { id: 1, name: "프렌치 바게트", description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
                { id: 2, name: "크로와상", description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
                { id: 3, name: "브리오슈", description: "프랑스의 전통적인 달콤한 빵으로, 기름과 계란이 많이 들어가서 부드럽고 고소한 맛과 부드러운 식감이 특징입니다." },
                { id: 4, name: "치아바타", description: "빵 자체는 비교적 폭이 넓은 직사각형 모양을 띠며, 바삭하면서도 촉촉하고 부드러운 식감이 특징입니다." }
            ],
            bottom: { goodbye: "맺음말", comment: "다음번에도 저희 가게를 방문해 주시길 바랍니다." }
        }
    }

    render() {
        return (
            <>
                <Top
                    greeting={this.state.top.greeting}
                    welcome={this.state.top.welcome}
                />
                <Content
                    breadList={this.state.breadList}
                />
                <Bottom
                    goodbye={this.state.bottom.goodbye}
                    comment={this.state.bottom.comment}
                />
            </>
        )
    }
}

export default App