import { Component } from "react";
import Bread from "./components/BreadList01";
import Coffee from "./components/CoffeeList01";

class App extends Component {
    render() {
        // console.log('하하하');

        return (
            <>
                <Bread />
                <hr />
                <Coffee />
            </>
        );
    }
}

export default App;