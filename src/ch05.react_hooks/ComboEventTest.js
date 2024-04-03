import { useState } from 'react';
import '../App.css';

function App() {
    const myStyle = { paddinig: '16px', margin: '16px' } // 사용자 지정 스타일
    const imageSize = 200;

    // 상품 목록
    const products = [
        { id: '1', category: 'bread', name: '-- 빵을 선택해 주세요.', image: '' },
        { id: '2', category: 'bread', name: '프렌치 바게트', image: 'french_baguette_01.png' },
        { id: '3', category: 'bread', name: '크로와상', image: 'croissant_01.png' },
        { id: '4', category: 'bread', name: '브리오슈', image: 'brioche_02.png' },
        { id: '5', category: 'bread', name: '치아바타', image: 'ciabatta_01.png' },
        { id: '6', category: 'beverage', name: '-- 음료수를 선택해 주세요.', image: '' },
        { id: '7', category: 'beverage', name: '우유', image: 'milk01.jpg' },
        { id: '8', category: 'beverage', name: '커피', image: 'coffee01.png' },
        { id: '9', category: 'beverage', name: '주스', image: 'juice01.png' },
        { id: '10', category: 'wine', name: '-- 와인을 선택해 주세요.', image: '' },
        { id: '11', category: 'wine', name: '와인01', image: 'redwine01.png' },
        { id: '12', category: 'wine', name: '와인02', image: 'redwine02.png' }
    ];

    const [image, setImage] = useState('/images/sonata.png'); // 표시될 이미지 정보
    const [selected, setSelected] = useState(''); // 사용자가 선택한 콤보 박스의 Value

    const ChangeSelect = (event) => {
        const targetValue = event.target.value;
        console.log('event.target.targetValue : ' + targetValue);
        setSelected(targetValue);
    };

    const ItemSelected = (event) => {
        // 서브 콤보의 항목을 클릭하였습니다.
        const targetValue = event.target.value;
        console.log('event.target.value : ' + targetValue);
        if(targetValue === '') {
            // alert('특정 품목 1개를 선택해 주셔야 합니다.');
            return;
        }

        // 선택한 품목에 대한 이미지 정보를 변경합니다.
        setImage(`/images/${targetValue}`);
    }

    const FilterItems = products.filter(item => {
        console.log(item.name);
        const category = item.category.toLocaleLowerCase(); // 소문자화

        if (selected === category) {
            return item;
        } else {
            return false;
        }
        
        // 슈퍼 콤보의 value와 일치하면서 품목의 카테고리가 일치하는 것만 필터링합니다.
        // if (selected === 'bread' && category === 'bread') {
        //     return item;

        // } else if (selected === 'beverage' && category === 'beverage') {
        //     return item;

        // } else if (selected === 'wine' && category === 'wine') {
        //     return item;

        // }

    })

    const SubSelect = () => {
        // 조회된 목록들을 이용하여 콤보 박스 (select)를 만들어 반환해 줍니다
        // const mapList = products.map(item => {
        //     console.log(item.name);
        // });
        const mapList = FilterItems.map(item =>
            <option key={item.id} value={item.image}>
                {item.name}
            </option>
        );

        return <select onClick={ItemSelected}>{mapList}</select>;
    }

    return (
        <div style={myStyle}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {/* ChangeSelect : 콤보 박스의 내용이 변경되면 호출되는 이벤트 핸들러 */}
                            <select onChange={ChangeSelect}>
                                <option key={"0"} value={"-"}>--- 품목을 선택해 주세요.</option>
                                <option key={"1"} value={"bread"}>빵</option>
                                <option key={"2"} value={"beverage"}>음료수</option>
                                <option key={"3"} value={"wine"}>와인</option>
                            </select>
                        </td>
                        <td>
                            {/* 상위 콤보에 종속하는 하위 콤보 */}
                            <SubSelect />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={image} alt='NoImage' width={imageSize} height={imageSize} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default App;