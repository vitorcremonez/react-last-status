import LanguagesReducer from './LanguagesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    languages: LanguagesReducer,
});

export default rootReducer;