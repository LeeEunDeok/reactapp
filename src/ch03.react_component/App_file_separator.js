import { Component } from "react";

// Top01파일 안의 항목을 Top으로 호칭하겠습니다.
import Top from "./components/Top01";
import Content from "./components/Content01";
import Bottom from "./components/Bottom01";

class App extends Component {
    render() {
        return (
            <>
                <Top
                    greeting="인사말"
                    welcome="어서 오세요. 저희 빵집을 방문해 주셔서 감사합니다."
                />
                <Content 
                    bread01="프렌치 바게트"
                    bread02="크로와상"
                    bread03="브리오슈"
                    bread04="치아바타"
                />
                <Bottom
                    goodbye="맺음말"
                    comment="다음번에도 저희 가게를 방문해 주시길 바랍니다."
                />
            </>
        )
    }
}

export default App