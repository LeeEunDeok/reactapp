import { Component } from "react";

class App extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.greeting}</h1>
                <p>{this.props.welcome}</p>
            </header>
        )
    }
}

export default App