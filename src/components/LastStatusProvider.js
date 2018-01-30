import React, {Component} from 'react';
import LastStatus from './LastStatus';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

class LastStatusProvider extends Component {
    render() {
        return(
            <Provider store={createStore(reducers)}>
                <LastStatus {...this.props}/>
            </Provider>
        );
    }
}

export default LastStatusProvider;