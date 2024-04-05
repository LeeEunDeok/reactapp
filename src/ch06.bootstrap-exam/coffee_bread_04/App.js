import './App.css';
import Card from 'react-bootstrap/Card';

import Top from './components/Top';
import Content from './components/Content';
import Bottom from './components/Bottom';

import Display from './components/Display';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

import { useState } from 'react';

function App() {
    const title = 'React 맛집';
    const comment = '어서 오세요~~맛있는 빵과 음료수가 많이 있습니다.';
    const message = '카운터에서 주문해 주시고 즐거운 시간 되시길 바랍니다.';

    // setProducts가 필수 사항은 아닙니다.
    // 이번 시간에는 필요해서 사용하겠습니다.
    const [products, setProducts] = useState([
        { id: 1, name: "프렌치 바게트", price: 1000, category: 'bread', stock: 111, image: 'french_baguette_01.png', description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
        { id: 2, name: "크로와상", price: 2000, category: 'bread', stock: 222, image: 'croissant_02.png', description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
        { id: 3, name: "아메리카노", price: 3000, category: 'beverage', stock: 333, image: 'americano01.png', description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
        { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino01.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." }
    ]);

    // 모드 : insert, update, delete, read, detail 등등
    const [mode, setMode] = useState('');

    // 선택된 <tr> 태그의 인덱스 번호
    const [selectedId, setSelectedId] = useState(1);

    const ClickArrived = (id) => {
        console.log('App-ClickArrived-called');
        console.log('선택하신 아이디 : ' + id);
        setSelectedId(Number(id));
        setMode('detail'); // 상세 보기 모드
    }

    // 폼에서 넘겨온 파라미터 목록을 저장할 변수
    const [newItem, setNewItem] = useState(null);

    const InsertData = (formData) => {
        // formData : 폼 양식에서 넘겨준 form 객체 정보(formObject 변수 in CreateContent.js)
        console.log('App-InsertData-called');

        // 모든 아이디 항목 중에서 최대값 + 1을 합니다.
        const newId = Math.max(...products.map(one => one.id)) + 1;

        const temp = [{
            id: newId,
            name: formData.name.value,
            price: formData.price.value,
            category: formData.category.value,
            stock: formData.stock.value,
            image: formData.image.value,
            description: formData.description.value
        }];

        setNewItem(temp);
        setMode('post_insert'); // post 방식으로 insert 하기

    }

    // 방금 수정된 행을 제외한 나머지 상품들을 필터링 해주는 함수입니다.
    const ExceptRow = (id) => {
        console.log('App-ExceptRow-id : [' + id + ']');
        return products.filter(one => one.id !== id);
    }

    const UpdateData = (formData) => {
        console.log('App-UpdateData-called');
        console.log('수정 폼에서 넘어온 데이터 정보');
        console.log(formData);

        const unModified = ExceptRow(formData.id);
        console.log('수정 되지 않은 데이터 정보');
        console.log(unModified);

        const reNewedData = unModified.concat(formData);
        console.log('갱신된 최종 상품 목록');
        console.log(reNewedData);

        setProducts(reNewedData);
        setMode('read');
    }

    // 모드에 따라서 화면을 다르게 보여주는 함수 입니다.
    const getContent = () => {
        if (mode === 'detail') {
            var mycontent = getReadContent();
            return <Display selectedProduct={mycontent}></Display>
        } else if (mode === 'get_insert') { // 회색 생성 버튼 클릭
            return <CreateContent onSubmitInsert={InsertData} />

        } else if (mode === 'post_insert') { // 내용 입력 후 파란색 생성 버튼 클릭
            // 기존 목록에 신규 목록을 추가합니다.
            // 배열끼리 합칠때 concat() 함수 사용
            const newProduct = products.concat(newItem);
            setProducts(newProduct);
            setMode('read'); // 읽기 모드로 변경해야 합니다.(무한(?) 렌더링 되기 때문에)

        } else if (mode === 'get_update') { // 수정 버튼 클릭
            // 목록에서 선택했던 행(row) 정보
            const currentRow = getReadContent();

            // 수정 화면에 기존 입력 내용을 프롭스로 넘겨 주어야 합니다.
            return <UpdateContent formData={currentRow} onSubmitUpdate={UpdateData} />;

        } else if (mode === 'post_update') {

            
        } else if (mode === 'get_delete') { // 삭제 버튼 클릭

        } else if (mode === 'get_category_add') { // 카테고리 추가 버튼 클릭

        } else if (mode === '') {

        }
    }

    const getReadContent = () => {
        // 선택된 상품에 대한 정보만 필터링하고
        const selectedProduct = products.filter(product => product.id === selectedId);

        return selectedProduct[0]; // 배열이므로 0번째 요소만 반환 시키면 됩니다.
    }

    const ModeSelected = (mode) => {
        console.log('App-ModeSelected-called');
        console.log('mode : ' + mode);
        setMode(mode); // 사용자가 클릭한 버튼의 mode 정보로 변경
    }

    return (
        // https://react-bootstrap.github.io/docs/components/cards
        <Card>
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                <Content contents={products} onClickToContent={ClickArrived} />
            </Card.Body>
            <Card.Body>
                {getContent()}
            </Card.Body>
            <Card.Footer>
                <Bottom message={message} onClickToBottom={ModeSelected} />
            </Card.Footer>
        </Card>
    );
}
export default App;