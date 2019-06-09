import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom'
import { TimeDisplay } from './components/time-display';
import { ButtonRow } from './components/button-row';
import { SomePage1 } from './pages/some-page1';
import { Home } from './pages/home';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world -- 2</h1>
                <TimeDisplay something="haha"></TimeDisplay>
                <ButtonRow text="Refresh - Remote"></ButtonRow>

                <ul>
                    <li>
                        <Link to="/some">Some</Link>
                    </li>
                </ul>

                {/*<Route path="/" component={Home} />*/}
                <Route path="/some" component={SomePage1} />
            </div>
        );
    }
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));