import React from 'react'
import ReactDOM from 'react-dom'

const AppComponent = () => (<div>{'App Component'}</div>)

const App1 = {
  mount: (refNode) => {
    ReactDOM.render(<AppComponent />, refNode)
  }
}
export default App1
