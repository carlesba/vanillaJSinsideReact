import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import App1 from './App1'
import App2 from './App2'

const domNode = document.getElementById('root')

class Wrapper extends Component {
  componentDidMount() {
    this.props.app.mount(this.node)
  }
  render() {
    return (<div ref={(node)=>this.node = node}/>)
  }
}
class Test extends Component {
  render() {
    return (
      <div>
        {'hola'}
        <div><Wrapper app={App1} /></div>
        <div><Wrapper app={App2} /></div>
      </div>)
  }
}

ReactDOM.render(<Test/>, domNode)
