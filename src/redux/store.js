/**
 * the core of redux (store)
 */
import  {createStore,applyMiddleware} from 'redux'
import {comments} from './reducers'
import thunk from 'redux-thunk'

 export default createStore (
     comments,
     applyMiddleware(thunk)
 )