import Router from './router'
import styles from './styles/main.css'

window.app = {
  init () {
    this.router = new Router()
    this.router.history.start()
  }
}

window.app.init()












// import React from 'react'
// import styles from './styles/main.css'

// const Hello = React.createClass({
//   render () {
//     return <div>Hello, {this.props.name}!</div>
//   }
// });

// React.render(<Hello name="Charlie"/>, document.body);