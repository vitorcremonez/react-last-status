import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LastStatus extends Component {
    constructor(props) {
        super(props);
        this.dictionary = this.props.languages[this.props.locale];
    }

    componentDidMount() {
        setInterval(
            () => {
                this.forceUpdate()
            },
            this.props.liveInterval
        );
    }

    fullDate(timestamp) {
        const weekday = this.dictionary.weekdays[moment(timestamp).format('d')];
        const month = this.dictionary.months[moment(timestamp).format('M') - 1];
        return moment(timestamp).format(`[${weekday}], DD [de] [${month}] [de] YYYY [às] HH:mm`);
    }

    lastStatus(timestamp) {
        const weekday = this.dictionary.weekdays[moment(timestamp).format('d')];
        const elapsedDays = moment().diff(moment(timestamp).startOf('day'), 'days');
        const elapsedMilliseconds = moment().diff(timestamp, 'milliseconds');
        if (elapsedMilliseconds < 0) {
            return 'invalid elapsed milliseconds';
        } else if (elapsedMilliseconds < this.props.onlineLimiar) {
            return this.dictionary.online;
        } else if (elapsedDays < 1) {
            return moment(timestamp).format(`[${this.dictionary.today}] [${this.dictionary.at}] HH:mm`);
        } else if (elapsedDays < 2) {
            return moment(timestamp).format(`[${this.dictionary.yesterday}] [${this.dictionary.at}] HH:mm`);
        } else if (elapsedDays < 7) {
            return moment(timestamp).format(`[${weekday}] [${this.dictionary.at}] HH:mm`);
        } else {
            return moment(timestamp).format(`DD/MM/YYYY [${this.dictionary.at}] HH:mm`);
        }
    }

    render() {
        const timestamp = this.props.timestamp;
        return (
            <span title={ this.fullDate(timestamp) }>
                { this.lastStatus(timestamp) }
                <br/>
                { moment(timestamp).format('LLLL') }
                <br/>
                { this.props.live ? 'live on' : 'live off' }
            </span>
        );
    }
}

function mapStateToProps(state) {
    return {
        languages: state.languages,
    }
}

LastStatus.defaultProps = {
    locale: 'es-US',
    onlineLimiar: 30000,
    live: true,
    liveInterval: 15000,
};

export default connect(mapStateToProps)(LastStatus);