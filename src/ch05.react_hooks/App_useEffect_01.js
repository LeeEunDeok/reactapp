import { useEffect, useState } from 'react';
import '../App.css'

function App () {
    const imageSize = 200;
    const interval = 1000; // 타이머 인터벌

    const [count, setCount] = useState(0); // 카운터 변수
    const [image, setImage] = useState('/images/americano01.png');

    const imageArray = [
        'brioche_03.png',
        'croissant_01.png',
        'redwine01.png',
        'whitewine02.png'
    ]

    const MyTimer = () => {
        // setTimeout(동작, 인터벌); 인터벌(초)후에 동작 하시오.
        // clearTimeout과; 같이 보도록 합시다.
        setTimeout(() => {
            setCount((count) => count + 1);

            const randomIdx = Math.floor(Math.random() * imageArray.length);
            const randomImage = imageArray[randomIdx];
            setImage(`/images/${randomImage}`)

        }, interval);
    }

    // useEffect(function, another) : function은 필수 요소, another는 옵션 요소 입니다.
    useEffect(MyTimer);

    return(
        <div>
            <h1>카운터 : {count}</h1>
            <div> {/* 이미지 넣을 공간 */}
                <img src={image} alt='NoImage' width={imageSize} height={imageSize} />
            </div>
        </div>
    )
}
export default App;