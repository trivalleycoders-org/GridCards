import React from 'react'
import { compose } from 'recompose'
import {
  Route,
} from 'react-router-dom'
import 'url-search-params-polyfill'
import withRoot from 'ui/withRoot'


// User
import App from './App'

// Dev
// eslint-disable-next-line
import { green, yellow, orange, red } from 'logger'


class AppContainer extends React.Component {
  render() {
    return (
      <Route render={props => (
          <App />
      )}/>
    )
  }
}


export default compose(
  withRoot,
)(AppContainer)