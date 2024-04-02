function App(){
    const ChangeTest = (event) => {
        for(const evt in event){
            console.log(evt);
        }
        console.log('event.type');
        console.log(event.type);

        console.log('event.target');
        console.log(event.target);

        var targetId = event.target.id;
        console.log('event.target.id');
        console.log(targetId);

        var targetValue = event.target.value;
        console.log('event.target.value');
        console.log(targetValue);

        if(targetId === 'bread_select'){
            console.log('콤보 박스');
            if(targetValue !== '-'){
                const imageUrl = '/images/' + targetValue;
                document.getElementById('image01').src=imageUrl;
            }else{
                alert('보여줄 이미지를 선택하셔야합니다.');
                document.getElementById('image01').src='';
            }
        }else{
            alert('입력 상자에 값이 들어왔습니다.');
            console.log('입력 상자');
        }
    }


    return(
        <div>
            <h2>체인지 이벤트</h2>
            <input type="text" id="input_box" onChange={ChangeTest}/>
            <br/>
            <select id="bread_select" onChange={ChangeTest}>
                <option value="-">항목을 선택해 주세요</option>
                <option value="french_baguette_01.png">프렌치 바게트</option>
                <option value="croissant_01.png">크로와상</option>
                <option value="brioche_01.png">브리오슈</option>
                <option value="ciabatta_01.png">치아바타</option>
            </select>
            <br/>
            <img id="image01" src="" alt="NoImage" width="300" height="300"/>
        </div>
    )
}
export default App;