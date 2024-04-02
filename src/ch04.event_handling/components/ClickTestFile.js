function App() {
    const ClickEvent01 = () => {
        console.log('안녕하세요~~여러분');
    }

    const ClickEvent02 = (name) => {
        // Template Strings는 반드시 백틱(`)을 사용해야 합니다.
        // ${}의 형식으로 접근합니다.
        const result = `반갑습니다. ${name}님~~`;
        console.log(result);
    }

    const ClickEvent03 = (x, y) => {
        const result = `${x} + ${y} 는 ${x + y} 입니다.`;
        console.log(result);
    }

    const ClickEvent04 = (message, event) => {
        // event는 이벤트 객체라고 부릅니다.
        console.log('파라미터 정보 : ' + message);

        var eventArray = [];

        for(const evt in event){
            // console.log(evt);
            eventArray.push(evt)
        }

        console.log(eventArray)
        console.log('이벤트 타입 : ' + event.type)
    }

    return (
        <div>
            <h2>클릭 테스트</h2>
            <button onClick={ClickEvent01}>매개변수 0개</button>
            <br />
            <button onClick={() => ClickEvent02('홍길동')}>매개변수 1개</button>
            <br />
            <button onClick={() => ClickEvent03(14, 5)}>매개변수 2개</button>
            <br />
            <button onClick={(event) => ClickEvent04('hello', event)}>이벤트 객체 보내기</button>
        </div>
    );
}
export default App;