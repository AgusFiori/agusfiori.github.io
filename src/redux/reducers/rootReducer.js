import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { themeReducer } from '../reducers/themeReducer'


const reducer = combineReducers({
  themeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store