import { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        console.log('하하하');

        return (
            <>
                <div>클래스 방식(jsx 실습)</div>
                <img src="http://localhost:3000/images/americano02.png" width={300} height={450} alt="이미지" />
                <div>방가워요</div>
            </>
        );
    }
}

export default App;