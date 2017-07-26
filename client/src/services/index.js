import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from './articles/reducer'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  articles,
  form: reduxFormReducer, // mounted under "form"
})
