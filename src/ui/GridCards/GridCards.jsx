import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import GridCard from './GridCard'

const cards = [1, 2, 3, 4, 5]

const GridCards = ({ classes }) => {
  return (
    <div>
      {
        cards.map(c => {
          return <GridCard />
        })
      }
    </div>
  )
}

const styles = theme => ({
  wrapper: {

  }
})

export default withStyles(styles)(GridCard)