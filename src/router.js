import React from 'react'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import NavBar from './components/navbar'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos',
    'otherShit': 'otherShit'
  },

  public () {
    React.render(<NavBar/>, document.body)
  },

  repos () {
    React.render(<NavBar/>, document.body)
  },

  otherShit () {
    React.render(<NavBar/>, document.body)
  }
})