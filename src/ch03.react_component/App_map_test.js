import { Component } from "react";

class App extends Component {
    render() {
        const persons = [
            {firstname:'민정', lastname:'김', age:10},
            {firstname:'효리', lastname:'최', age:20},
            {firstname:'지영', lastname:'강', age:30}
        ]

        function getPersonInfo(item, index){
            // console.log('item')
            // console.log(item)
            // console.log('index')
            // console.log(index)

            const info =
                <li key={index}>
                    {item.lastname} {item.firstname}님, 나이 : {item.age}세
                </li>

            return info
        }

        const CustomerList = () => {
            const personList = persons.map(getPersonInfo)
            return <ol>{personList}</ol>
        }

        const WinterItems = () => {
            const names = ['눈사람', '얼음', '눈', '바람'];
            const nameList = names.map((item, index) => <li key={index}>{item}</li>);
            return <ul>{nameList}</ul>;
        }

        return (
            <>
                <h2>고객 리스트</h2>
                <CustomerList />

                <h2>겨울 용품</h2>
                <WinterItems />
            </>
        )
    }
}

export default App;