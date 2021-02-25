import cartReducer from './cartReducer'
import productReducer from './productReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
})
export default rootReducer
