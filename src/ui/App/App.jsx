import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

// User

// Design
// import Palette from 'ui/ui-design/Palette'
// import TypographyGuide from 'ui/ui-design/TypographyGuide'

// Dev
// eslint-disable-next-line
import { green, yellow, orange, red } from 'logger'

const App = ({ classes }) => {

  return (
    <div id='App' className={classes.wrapper}>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    backgroundColor: 'red',
    width: '100vw',
    height: '100vh',
  },

})

export default compose(
  withStyles(styles),
)(App)
