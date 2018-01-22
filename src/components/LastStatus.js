import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class LastStatus extends Component {
    fullDate(timestamp) {
        const weekday = this.props.languages['pt-BR'].weekdays[moment(timestamp).format('d')];
        const month = this.props.languages['pt-BR'].months[moment(timestamp).format('M') - 1];
        return moment(timestamp).format(`[${weekday}], DD [de] [${month}] [de] YYYY [às] HH:mm`);
    }

    lastStatus(timestamp) {
        const weekday = this.props.languages['pt-BR'].weekdays[moment(timestamp).format('d')];
        const elapsedDays = moment().diff(moment(timestamp).startOf('day'), 'days');
        const elapsedMilliseconds = moment().diff(timestamp, 'milliseconds');
        if (elapsedMilliseconds < 0) {
            return 'invalid elapsed milliseconds';
        } else if (elapsedMilliseconds < 30000) {
            return this.props.languages['pt-BR'].online;
        } else if (elapsedDays < 1) {
            return moment(timestamp).format(`[${this.props.languages['pt-BR'].today}] [${this.props.languages['pt-BR'].at}] HH:mm`);
        } else if (elapsedDays < 2) {
            return moment(timestamp).format(`[${this.props.languages['pt-BR'].yesterday}] [${this.props.languages['pt-BR'].at}] HH:mm`);
        } else if (elapsedDays < 7) {
            return moment(timestamp).format(`[${weekday}] [${this.props.languages['pt-BR'].at}] HH:mm`);
        } else {
            return moment(timestamp).format(`DD/MM/YYYY [${this.props.languages['pt-BR'].at}] HH:mm`);
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
            </span>
        );
    }
}

function mapStateToProps(state) {
    return {
        languages: state.languages,
    }
}

export default connect(mapStateToProps)(LastStatus);