import { Component } from "react";

class Top extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.greeting}</h1>
                <p>{this.props.welcome}</p>
            </header>
        )
    }
}

class Content extends Component {
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

class Bottom extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.goodbye}</h2>
                <p>{this.props.comment}</p>
            </article>
        )
    }
}

class App extends Component {
    render() {
        return (
            <>
                <Top
                    greeting="인사말"
                    welcome="어서 오세요. 저희 빵집을 방문해 주셔서 감사합니다."
                />
                <Content 
                    bread01="프렌치 바게트"
                    bread02="크로와상"
                    bread03="브리오슈"
                    bread04="치아바타"
                />
                <Bottom
                    goodbye="맺음말"
                    comment="다음번에도 저희 가게를 방문해 주시길 바랍니다."
                />
            </>
        )
    }
}

export default App