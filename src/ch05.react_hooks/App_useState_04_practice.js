import { useState } from 'react';
import '../App.css';

function App(){
    const [members, setMembers] = useState([
        { id: 1, name: '김길선', age: 22 },
        { id: 2, name: '임우영', age: 32 },
        { id: 3, name: '황인태', age: 42 },
        { id: 4, name: '윤철용', age: 12 }
    ])

    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newId, setNewId] = useState(5)

    const addName = (event) => {
        setNewName(event.target.value)
    }

    const addAge = (event) => {
        setNewAge(Number(event.target.value))
    }

    const clickButton = () => {
        const newMembers = members.concat({id:newId, name: newName, age: newAge})
        setMembers(newMembers)

        setNewName('')
        setNewAge('')
        setNewId(newId + 1)
        
    }

    const removeRow = (event) => {
        const filterData = members.filter(one => one.id !== Number(event.target.id))
        setMembers(filterData)
    }

    const memberList = members.map(one => {
        return <li id={one.id} key={one.id} onDoubleClick={removeRow}>
            {one.name}({one.age})
        </li>
    })

    return(
        <div>
            이름 : <input onChange={addName} value={newName}/>
            <br/>
            나이 : <input onChange={addAge} value={newAge}/>
            <br/>
            <button onClick={clickButton}>추가</button>
            <br/>
            <p>항목을 더블 클릭하면 요소가 삭제 됩니다.</p>
            <h4>회원 목록</h4>
            <ul>{memberList}</ul>
        </div>
    )
}
export default App