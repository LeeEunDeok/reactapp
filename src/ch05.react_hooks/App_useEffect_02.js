import { useEffect, useState } from 'react';
import '../App.css'

function App() {
    const [count, setCount] = useState(0);
    const [twoTimes, setTwoTimes] = useState(0); // 2배수

    // 나중에는 y=a*x+b 의 형태로 구성해 보자. hint) useState
    const [another, setAnother] = useState(0); // 3배수 + 1

    const [image, setImage] = useState('/images/americano01.png');
    const imageSize = 200;
    const [imageIdx, setImageIdx] = useState(0); // 현재 선택된 이미지(배열)의 색인 번호

    const imageArray = [
        'brioche_03.png',
        'croissant_01.png',
        'redwine01.png',
        'whitewine02.png'
    ];

    const toDoSomething = () => {
        console.log('count : ' + count);
        setTwoTimes(() => 2 * count);
        setAnother(() => 3 * count + 1);

        // 현재 이미지 인덱스를 이용하여 그림을 그립니다.
        console.log('현재 이미지 인덱스 : ' + imageIdx);
        const changeImage = '/images/' + imageArray[imageIdx];
        setImage(changeImage);
        setImageIdx(imageIdx + 1);
        if(imageIdx === (imageArray.length-1)){setImageIdx(0);}
    };

    // 브라우저 최초 실행 시 1번만 rendering 되고 두번째 매개변수의 값([count])이 변경될 때마다 다시 rendering 됩니다.
    useEffect(toDoSomething, [count]);

    return (
        <div>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>카운터</td>
                        <td>{count}</td>
                    </tr>
                    <tr>
                        <td>2배수</td>
                        <td>{twoTimes}</td>
                    </tr>
                    <tr>
                        <td>3배수 + 1</td>
                        <td>{another}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {/* 화살표 함수를 직접 속성에 작성할 수 있습니다. */}
            <button onClick={() => { setCount(count + 1) }}> {/*() => {setCount((count) => count + 1)}*/}
                &nbsp;+1 증가&nbsp;
            </button>
            <div>
                <img src={image} alt='NoImage' width={imageSize} height={imageSize}/>
            </div>
        </div>
    )
}
export default App;