import React from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './src/redux/rootReducer'
import RootElement from './src/components/rootElement'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
))

const App = () => {

  return (
    <Provider store={store}>
      <RootElement />
    </Provider>
  )
}

export default App