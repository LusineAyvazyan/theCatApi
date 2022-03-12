import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import catReducer from './catReducer';


const rootReducer = combineReducers({
  category: categoryReducer,
  cat: catReducer,
});

export default rootReducer;