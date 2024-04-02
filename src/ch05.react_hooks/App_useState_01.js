import { useState } from 'react';
import './../App.css'

function App() {
    const defaultName = '프렌치 바게트'
    const imageSize = 300;
    const defaultImage = 'french_baguette_01.png'

    /* color라는 변수를 생성하고, 기본 값을 'red'로 지정합니다. */
    /* setColor는 color 변수를 변경하기 위한 setter 함수 이름입니다. */
    const [color, setColor] = useState('red');
    const [name, setName] = useState(defaultName);
    const [image, setImage] = useState(defaultImage);

    const ClickEvent = () => {
        console.log('현재 색상 : ' + color);
        if (color === 'red') {
            setColor('blue');
            setName('크로와상');
            setImage('croissant_01.png')
        } else {
            setColor('red');
            setName(defaultName);
            setImage(defaultImage);
        }
    }

    return (
        <div>
            <h1>My favorite color is {color}</h1>
            <font color={color}><b>글자 색상</b></font>
            <br /><br />
            <button type='button' onClick={ClickEvent}>
                클릭시 이미지 변경 및 색상 변경
            </button>
            <br /><br />
            <h4>이름 : {name}</h4>
            <img src={'/images/' + image} alt={name} width={imageSize} height={imageSize} />
        </div>
    );
}
export default App;