function App() {
    const SubmitTest = (event) => {
        console.log('event.type : ' + event.type);

        const go = document.getElementById('go').checked;
        console.log('체크 상태 : ' + go);

        if (go === true) {
            alert('액션 페이지로 이동합니다.');
        } else {
            alert('액션 페이지로 이동하지 않습니다.');
            // 이벤트 전파를 한시적으로 막아줍니다.
            event.preventDefault();
        }
    }

    const ChangeTest = (event) => {
        const where = event.target.value;
        console.log('이동할 곳 : ' + where);
        // 이동할 곳을 변경하고
        document.getElementById('myform').action = where;
        // 해당사이트로 이동합니다.
        document.getElementById('myform').submit();
    }
    return (
        <div>
            <h2>Submit Test</h2>
            <form id="myform" onSubmit={SubmitTest} action="https://www.google.co.kr">
                <select onChange={ChangeTest}>
                    <option value="-">-- 이동할 곳을 선택해 주세요.</option>
                    <option value="https://www.naver.com">네이버</option>
                    <option value="https://www.daum.net">다음</option>
                    <option value="https://www.yahoo.com">야후</option>
                </select>

                <br /><br />
                &nbsp;&nbsp;&nbsp;
                <input type="checkbox" id="go" />체크 상태일때만 페이지로 이동하기

                &nbsp;&nbsp;&nbsp;
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default App;