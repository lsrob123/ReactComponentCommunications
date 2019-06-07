import React from 'react';
import ReactDOM from 'react-dom';
import { TimeDisplay } from './views/time-display';
import { ButtonRow } from './views/button-row';

/*const App = () => (
    <div>
        <h1>Hello world!!</h1>
    </div>
) */


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world -- 2</h1>
                <TimeDisplay something="haha"></TimeDisplay>
                <ButtonRow text="Refresh - Remote"></ButtonRow>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));