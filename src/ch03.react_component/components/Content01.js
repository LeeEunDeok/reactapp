import { Component } from "react";

class App extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">{this.props.bread01}</a></li>
                    <li><a href="2.html">{this.props.bread02}</a></li>
                    <li><a href="3.html">{this.props.bread03}</a></li>
                    <li><a href="4.html">{this.props.bread04}</a></li>
                </ul>
            </nav>
        )
    }
}

export default App