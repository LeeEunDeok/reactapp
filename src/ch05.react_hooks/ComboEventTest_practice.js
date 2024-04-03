import { useState } from 'react';
import '../App.css';

function App() {
    const imageSize = 200;
    const [image, setImage] = useState('/images/americano01.png');
    const [selected, setSelected] = useState('');

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

    const filterData = products.filter(item => {
        if (selected === item.category) {
            return item
        } else {
            return false
        }
    })

    const ShowImage = (event) => {
        setImage('/images/' + event.target.value)
    }

    const ProductsList = () => {
        const abc = filterData.map(item =>
            <option key={item.id} value={item.image}>{item.name}</option>
        )

        return <select onChange={ShowImage}>{abc}</select>
    }

    const selectedOption = (event) => {
        const targetValue = event.target.value;
        setSelected(targetValue);
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <select onChange={selectedOption}>
                                <option value={'-'}>--- 품목을 선택해 주세요.</option>
                                <option value={'bread'}>빵</option>
                                <option value={'beverage'}>음료수</option>
                                <option value={'wine'}>와인</option>
                            </select>
                        </td>
                        <td>
                            <ProductsList />
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
    )
}
export default App;