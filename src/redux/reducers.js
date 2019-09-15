/**
 * including all reducer funcions ( return a new state according to the old state and action)
 */
import {ADD_COMMENT,DELETE_COMMENT} from './actions-types'
const initComments = [
    {username: 'Tom', content: 'React is pretty good'},
    {username: 'Jack', content: 'React is so easy'}
]

 export function comments(state =initComments , action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment, index) => 
            index !== action.data)
        default:
            return state
    }
}