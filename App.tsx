import React from 'react'
import StackNavigator from './config/StackNavigator'
import { Provider } from 'react-redux'
import store from './config/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  )
}
