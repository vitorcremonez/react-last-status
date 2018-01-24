import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';

class LastStatus extends Component {
    static defaultProps = {
        locale: 'en',
        nowLimiar: 30000, //ms
        refreshInterval: 15000, //ms
    };

    constructor(props) {
        super(props);
        this.dictionary = this.props.languages[this.props.locale];
    }

    componentWillUpdate() {
        this.dictionary = this.props.languages[this.props.locale];
    }

    componentDidMount() {
        setInterval(
            () => {
                this.forceUpdate()
            },
            this.props.refreshInterval
        );
    }

    render() {
        const timestamp = this.props.timestamp;
        return (
            <span title={ moment(timestamp).locale(this.props.locale).format('LLLL').toLowerCase() }>
                {
                    moment(timestamp).locale(this.props.locale).calendar(null, {
                        sameDay: (now) => {
                            if (!moment(timestamp).locale(this.props.locale).isBefore(now - this.props.nowLimiar)) {
                                return this.dictionary ? this.dictionary.now : '[online]';
                            } else {
                                return this.dictionary ? this.dictionary.sameDay : null;
                            }
                        },
                        lastDay: this.dictionary ? this.dictionary.lastDay : null,
                        lastWeek: this.dictionary ? this.dictionary.lastWeek : null,
                        sameElse: this.dictionary ? this.dictionary.sameElse : null,
                    }).toLowerCase()
                }
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