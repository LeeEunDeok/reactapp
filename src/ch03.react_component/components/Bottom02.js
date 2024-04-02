import { Component } from "react";

class App extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.goodbye}</h2>
                <p>{this.props.comment}</p>
            </article>
        )
    }
}

export default App