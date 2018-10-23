import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Card = ({ classes }) => {
  return (
    <div className={classes.wrapper}></div>
  )
}

const styles = theme => ({
  wrapper: {
    padding: '150px 100px',
  }
})

export default withStyles(styles)(Card)