import { useState } from 'react';
import '../App.css';

function App() {
    // 회원 명단
    const [members, setMembers] = useState([
        { id: 1, name: '김길선', age: 22 },
        { id: 2, name: '임우영', age: 32 },
        { id: 3, name: '황인태', age: 42 },
        { id: 4, name: '윤철용', age: 12 }
    ]);

    // 항목 더블 클릭 시 삭제하기
    const RemoveSelectedRow = (event) => {
        const id = event.target.id;
        console.log('선택한 항목 id의 타입 : ' + typeof id);
        console.log('선택한 항목 id : ' + id);
        
        // filter() 함수를 사용하여 선택한 항목을 제외하고 새로운 배열을 만듭니다.
        const filterData = members.filter(one => one.id !== Number(id));
        setMembers(filterData);
    };

    // const memberList = members.map(one => {}) 이것은
    // for(Object one : memberList){} in Java, for one in memberList: in Python 과 비슷하다.
    const memberList = members.map(one => {
        // 목록으로 보일 내용을 <li> 태그 형식으로 반환 하기
        return <li id={one.id} key={one.id} onDoubleClick={RemoveSelectedRow}>
                    {one.name}({one.age})
                </li>;
    });

    const[name, setName] = useState('');
    const[age, setAge] = useState(0);

    const NameChange = (event) => { /* 이름 입력 상자 이벤트 핸들러 */
        const targetValue = event.target.value;
        console.log('이름 : ' + targetValue);
        setName(targetValue);

    }; /* end NameChange */

    const AgeChange = (event) => { /* 나이 입력 상자 이벤트 핸들러 */
        const targetValue = event.target.value;
        console.log('나이 : ' + targetValue);
        setAge(targetValue);

    }; /* end AgeChange */

    // 차후 개선 : 배열 요소의 최고 id 값을 읽고 +1 하는 방식이 좋을듯 함.
    const [nextId, setNextId] = useState(5); /* 추가 될 회원의 id 값 */

    // 입력한 회원 정보를 객체로 만들어 회원 명단 members에 추가하기
    const AddButtonClick = () => {
        const newMembers = members.concat({id: nextId, name: name, age: age});

        setMembers(newMembers); // 회원 명단 갱신

        // 갱신 후 입력 양식 초기화
        setName('');
        setAge(0);

        // 식별자 번호를 1 증가 하기
        setNextId(nextId + 1)

    }; /* end AddButtonClick */

    

    return (
        <div>
            이름 : <input value={name} onChange={NameChange}/>
            <br />
            나이&nbsp;:&nbsp;<input value={age} onChange={AgeChange}/>
            <br />
            <button onClick={AddButtonClick}>추가</button>
            <br /><br />
            항목을 더블 클릭하면 요소가 삭제 됩니다.
            <br />
            <h4>회원 목록</h4>
            <ul>{memberList}</ul>
        </div>
    )
}
export default App;