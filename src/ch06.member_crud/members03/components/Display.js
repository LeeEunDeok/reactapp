import { Table } from 'react-bootstrap';

function App(props) {
    const person = props.myDetail;
    console.log('person');
    console.log(person);

    return (
        <div className="table_padding">
            <Table>
                <tbody>
                    <tr>
                        <td width="40%">
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>아이디</td>
                                        <td>{person.id}</td>
                                    </tr>
                                    <tr>
                                        <td>이름</td>
                                        <td>{person.name}</td>
                                    </tr>
                                    <tr>
                                        <td>성별</td>
                                        <td>{person.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>생일</td>
                                        <td>{person.birth}</td>
                                    </tr>
                                    <tr>
                                        <td>결혼 유무</td>
                                        <td>{person.marriage}</td>
                                    </tr>
                                    <tr>
                                        <td>급여</td>
                                        <td>{person.salary} 만원</td>
                                    </tr>
                                    <tr>
                                        <td>주소</td>
                                        <td>{person.address}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                        <td>
                            <img src={'/images/' + person.image} alt='NoImage' width={210} height={210} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default App;