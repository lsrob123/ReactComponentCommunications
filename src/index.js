import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { SomePage1 } from './pages/some-page1';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };

        this.updateTime = this.updateTime.bind(this);
    }

    updateTime() {
        this.setState({ time: new Date() })
    }

    render() {
        return (
            <div>
                <h1>App 1 Area</h1>
                <p>
                    {this.state.time.toString()}
                </p>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/some">Some</Link>
                    </li>
                </ul>

                <Route path="/" render={props=><Home updatedTime={this.state.time} />} />
                <Route path="/some" render={props => <SomePage1 setTime={this.updateTime} ancesterTime={this.state.time} />} />
            </div>
        );
    }
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));