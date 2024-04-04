import { useState } from 'react';
import './App.css';
import Top from './components/Top';
import Content from './components/Content';
import Bottom from './components/Bottom';
import Display from './components/Display';

import Card from 'react-bootstrap/Card';

function App() {

    const [members] = useState([
        { id: 'yusin', name: '김유신', gender: '남자', birth: '1990/12/25', marriage: '결혼', salary: 220, address: '용산', image: 'human 01.png' },
        { id: 'lee', name: '이순신', gender: '남자', birth: '1990/12/25', marriage: '이혼', salary: 220, address: '마포', image: 'human 02.png' },
        { id: 'choi', name: '최영', gender: '남자', birth: '1990/12/25', marriage: '결혼', salary: 155, address: '강남', image: 'human 03.png' },
        { id: 'kang', name: '강감찬', gender: '남자', birth: '1990/12/25', marriage: '이혼', salary: 100, address: '서대문', image: 'human 04.png' },
        { id: 'shin', salary: 215, address: '서대문', name: '신사임당', gender: '여자', birth: '1990/12/25', marriage: '미혼', image: 'human 05.png' },
        { id: 'hwang', salary: 215, address: '용산', name: '황진이', gender: '여자', birth: '1990/12/25', marriage: '결혼', image: 'human 06.png' },
        { id: 'myoung', salary: 215, address: '강남', name: '명성왕후', gender: '여자', birth: '1990/12/25', marriage: '이혼', image: 'human 07.png' },
        { id: 'maria', salary: 215, address: '서대문', name: '조마리아', gender: '여자', birth: '1990/12/25', marriage: '이혼', image: 'human 08.png' }
    ]);

    const title = '고객 장부';
    const comment = '고객 목록을 확인하는 페이지 입니다.';

    const [mode, setMode] = useState('');
    const [selectedId, setSelectedId] = useState('');

    const ClickArrived = (id) => {
        console.log(id);
        setMode('detail');
        setSelectedId(id);
    }

    const GetDetailView = () => {
        const filterData = members.filter(one => one.id === selectedId)
        return filterData[0];
    }

    const GetContent = () => {
        if (mode === 'detail') {
            var myDetail = GetDetailView();
            return <Display myDetail={myDetail} />

        } else if (mode === '') {

        } else if (mode === '') {

        } else if (mode === '') {

        } else if (mode === '') {

        }
    }

    return (
        <Card>
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                <Content contents={members} onClickToContent={ClickArrived} />
            </Card.Body>
            <Card.Body>
                {GetContent()}
            </Card.Body>
            <Card.Footer>
                <Bottom message={'message'} onClickToBottom={'ModeSelected'} />
            </Card.Footer>
        </Card>
    );
}
export default App;