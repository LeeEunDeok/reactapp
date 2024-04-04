import './App.css';
import Top from './components/Top';
import Content from './components/Content';
import Bottom from './components/Bottom';

import Card from 'react-bootstrap/Card';

function App() {
    const title = '고객 장부';
    const comment = '고객 목록을 확인하는 페이지 입니다.';

    return (
        <Card>
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                <Content contents={'products'} onClickToContent={'ClickArrived'} />
            </Card.Body>
            <Card.Body>
                {'getContent()'}
            </Card.Body>
            <Card.Footer>
                <Bottom message={'message'} onClickToBottom={'ModeSelected'} />
            </Card.Footer>
        </Card>
    );
}
export default App;