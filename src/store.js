import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk]

const store = createStore(
  rootReducer,
  // to use confirm store status in chrome devtool
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
