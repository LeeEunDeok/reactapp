function App() {
    const KeyEventTest = (param, event) => {
        console.log('파라미터 : ' + param);
        console.log('파라미터 : ' + event.type);

        const targetValue = event.target.value;
        console.log('event.target.value : ' + targetValue);
        
        // 컨트롤 키가 눌러지면 true 입니다. 'shiftKey' 'altKey'
        console.log('event.ctrlKey : ' + event.ctrlKey);

        for(const evt in event){
            console.log(evt);
        }

        // 아스키 코드를 반환합니다.
        console.log('event.keyCode : ' + event.keyCode);
        
        if(event.keyCode >= 48 && event.keyCode <= 57){
            console.log('숫자를 입력하셨습니다.');
        }else{
            console.log('숫자가 아닙니다.');
        }
    }
    
    return (
        <>
            <h2>Key Event</h2>

            Key down :
            <input type="text" onKeyDown={(event) => KeyEventTest('hello', event)} />
            <br />

            Key press :
            <input type="text" onKeyPress={(event) => KeyEventTest('world', event)} />
            <br />

            Key up :
            <input type="text" onKeyUp={(event) => KeyEventTest('welcome', event)} />
            <br />
        </>
    );
}
export default App;