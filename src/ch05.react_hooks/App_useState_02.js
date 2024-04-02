import { useState } from "react"
import './../App.css'

function App() {
    const imageSize = 120; // 이미지 사이즈

    const [image, setImage] = useState('avante.png'); // 이미지 이름
    const [model, setModel] = useState('avante'); // 모델 이름
    const [color, setColor] = useState('blue'); // 색상 이름
    const [year, setYear] = useState(2024); // 생산 년도
    const [comment, setComment] = useState(''); // 코멘트

    // 중첩 배열을 사용하여 Map 구조 만들기
    const carList = new Map([
        ['avante', '아반떼'],
        ['sonata', '소나타'],
        ['grandeur', '그랜져']
    ]);

    const ChangeTest = (event) => {
        const targetId = event.target.id;

        // targetValue에는 점(dot)과 확장자 이름을 제외한 순수 파일명이 들어 있습니다.
        const targetValue = event.target.value;
        console.log(targetId + '/' + targetValue);

        if (targetId === 'type') { /* 차종 변경 */
            setImage(`${targetValue}.png`);
            // setModel(targetValue); // 이전 방식
            setModel(carList.get(targetValue)); // Map 구조를 사용한 한글 추출

        } else if (targetId === 'color') { /* 색상 변경 */
            setColor(targetValue);

        } else if (targetId === 'year') { /* 연도 변경 */
            setYear(targetValue);

            console.log(typeof targetValue);

            let myComment = '';
            if (targetValue === '2024') {
                myComment = '신차입니다.';
            } else if (targetValue === '2021') {
                myComment = 'Old Car 입니다.';
            } else {
                myComment = '나름 좋아요.';
            }
            setComment(myComment);

        } else {

        }
    }



    return (
        <div>
            <h1>내 차 정보</h1>
            <p>
                차종은 이미지 변경이 되고 색상은 설명 문구의 색상이 변경됩니다.
            </p>

            차종 변경 : &nbsp;
            <select id='type' onChange={ChangeTest}>
                <option value={'avante'}>아반떼</option>
                <option value={'sonata'}>소나타</option>
                <option value={'grandeur'}>그랜져</option>
            </select>
            <br /><br />

            색상 변경 : &nbsp;
            <select id='color' onChange={ChangeTest} defaultValue={'blue'}>
                <option value={'yellow'}>노랑</option>
                <option value={'blue'}>파랑</option>
                <option value={'red'}>빨강</option>
                <option value={'green'}>녹색</option>
            </select>
            <br /><br />

            생산연도 변경 : &nbsp;
            <select id='year' onChange={ChangeTest} defaultValue={'2024'}>
                <option value={'2021'}>2021</option>
                <option value={'2022'}>2022</option>
                <option value={'2023'}>2023</option>
                <option value={'2024'}>2024</option>
            </select>
            <br /><br />

            {/* 바깥 중괄호 : JSX 표현식, 안쪽 중괄호 : JavaScript Object */}
            <p style={{ color }}>
                {color} 색상의 {year} 년산 {model} 모델<br />
                {comment}
            </p>
            <br />

            <img src={'/images/' + image} alt='' width={imageSize} height={imageSize} />

        </div>
    )
}
export default App