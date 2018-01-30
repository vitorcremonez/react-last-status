import React, {Component} from 'react';
import LastStatus from "./LastStatus";
import LastStatusProvider from "./LastStatusProvider";
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);

        this.TIMESTAMP = "TIMESTAMP";
        this.LOCALE = "LOCALE";
        this.NOWLIMIAR = "NOWLIMIAR";
        this.REFRESHINTERVAL = "REFRESHINTERVAL";

        this.state = {
            timestamp: 0,
            min: moment().subtract(2, 'week').valueOf(),
            now: moment().valueOf(),
            locale: 'pt-BR',
            nowLimiar: 10000,
            refreshInterval: 1000,
            selected: this.TIMESTAMP,
        };
    }

    renderTimestampSelector() {
        return (
            <div>
                <input type="range" style={{width:"100%"}} min={this.state.min} max={this.state.now} onChange={(event) => this.setState({timestamp: event.target.value, now: moment().valueOf()})}/>
            </div>
        );
    }

    renderLocaleSelector() {
        return (
            <div>
                <button onClick={() => this.setState({locale: 'en'})}>English (EUA)</button>
                <button onClick={() => this.setState({locale: 'pt-BR'})}>Portuguese (Brazil)</button>
            </div>
        );
    }

    renderNowLimiarSelector() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.setState({nowLimiar: this.refs.nowLimiar.value});
            }}>
                <input ref={"nowLimiar"} placeholder="nowLimiar..."/>
                <br/>
                <button type="submit">ok</button>
            </form>
        );
    }

    renderRefreshIntervalSelector() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.setState({refreshInterval: this.refs.refreshInterval.value});
            }}>
                <input ref={"refreshInterval"} placeholder="refreshInterval..."/>
                <br/>
                <button type="submit">ok</button>
            </form>
        );
    }

    renderSelectors() {
        switch (this.state.selected) {
            case this.TIMESTAMP:
                return this.renderTimestampSelector();
            case this.LOCALE:
                return this.renderLocaleSelector();
            case this.NOWLIMIAR:
                return this.renderNowLimiarSelector();
            case this.REFRESHINTERVAL:
                return this.renderRefreshIntervalSelector();
            default:
                return <div>Click to select a prop!</div>
        }
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>react-last-status</h1>

                <h2 style={{color: "red"}}>
                    <LastStatusProvider
                        timestamp={parseInt(this.state.timestamp)}
                        nowLimiar={this.state.nowLimiar}
                        refreshInterval={this.state.refreshInterval}
                        locale={this.state.locale}/>
                </h2>

                { this.renderSelectors() }

                <br/>
                <br/>

                <div>
                    <h3>Props:</h3>
                    { '<LastStatus ' }
                    <div style={this.state.selected === this.TIMESTAMP ? {fontWeight: "bold"} : null} onClick={() => {this.setState({selected: this.TIMESTAMP})}}>
                        timestamp={`{${this.state.timestamp}}`}
                    </div>
                    <div style={this.state.selected === this.LOCALE ? {fontWeight: "bold"} : null} onClick={() => {this.setState({selected: this.LOCALE})}}>
                        locale={`'${this.state.locale}'`}
                    </div>
                    <div style={this.state.selected === this.NOWLIMIAR ? {fontWeight: "bold"} : null} onClick={() => {this.setState({selected: this.NOWLIMIAR})}}>
                        nowLimiar={`{${this.state.nowLimiar}}`}
                    </div>
                    <div style={this.state.selected === this.REFRESHINTERVAL ? {fontWeight: "bold"} : null} onClick={() => {this.setState({selected: this.REFRESHINTERVAL})}}>
                        refreshInterval={`{${this.state.refreshInterval}}`}
                    </div>
                    { '/>' }
                </div>
            </div>
        );
    }
}

export default App;
