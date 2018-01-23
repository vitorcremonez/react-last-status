import React, {Component} from 'react';
import LastStatus from "./LastStatus";
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: 0,
            min: moment('2018-01-01T03:55:33+00:00').valueOf(),
            now: moment().valueOf(),
        }
    }

    render() {
        return (
            <div>
                <div>
                    1970 <input type="range" style={{width:"100%"}} min={this.state.min} max={this.state.now} onChange={(event) => this.setState({timestamp: event.target.value, now: moment().valueOf()})}/> now
                </div>
                <div>
                    { this.state.timestamp }
                </div>
                <br/>
                <br/>
                last seen <LastStatus timestamp={parseInt(this.state.timestamp)} locale={'pt-BR'}/>
            </div>
        );
    }
}

export default App;
