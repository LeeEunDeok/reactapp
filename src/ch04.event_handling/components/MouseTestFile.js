/* MouseMove, MouseOver, MouseOut 등 */
import {useState} from "react";

function App() {
    const smallSize = 90; /* 작은 이미지 크기*/
    const bigSize = 400; /* 큰 이미지 크기*/

    // useState는 상태 관리를 위한 React hooks의 일종입니다.
    // 상태 imageName 를 정의하고, 값 변경은 setImageName 처리해주세요.
    const [imageName,setImageName]=useState('');

    const MouseMoveTest = (event) => {
        const imageSource = event.target.src;
        console.log('event.target.src : ' + imageSource);

        const imageName = event.target.alt;
        console.log('event.target.alt : ' + imageName);
        setImageName(imageName); // 상태 값의 변경

        document.getElementById('imageTarget').src = imageSource;
        
    }


    return (
        <div>
            <h2>MouseMove 이벤트</h2>
            <p>임의의 이미지에 마우스가 들어가면 큰 이미지 영역에 이미지가 보입니다.</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src="/images/french_baguette_01.png" alt="프렌치" width={smallSize} height={smallSize}
                            onMouseMove={MouseMoveTest} />
                        </td>
                        {/* 여기는 큰 그림이 들어가는 영역입니다. */}
                        <td width={bigSize} rowSpan="4">
                            <h4>{imageName}</h4>
                            <img id="imageTarget" src="" alt="NoImage" width={bigSize} height={bigSize} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/croissant_01.png" alt="크로와상" width={smallSize} height={smallSize}
                            onMouseMove={MouseMoveTest} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/brioche_01.png" alt="브리오슈" width={smallSize} height={smallSize}
                            onMouseMove={MouseMoveTest} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/ciabatta_01.png" alt="치아바타" width={smallSize} height={smallSize}
                            onMouseMove={MouseMoveTest} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default App;