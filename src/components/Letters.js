import React from 'react'
import { Grid } from 'semantic-ui-react'

export const Letters = (props) => {

  const letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  const { words } = props
  console.log(words)



  function lists(position) {
    return (
      <Grid.Column key={position}>
        <font size={4}> <strong>{ letters[position] }</strong></font>
        <br />
        <font size={1}>({ words[position].length })</font>
      </Grid.Column>
    )
  }

  return (
    <Grid columns={13} celled='internally' textAlign="center" verticalAlign="middle">
      <Grid.Row>
        { [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(x => lists(x) ) }
      </Grid.Row>

    </Grid>
  )

}


// <Grid.Row>
//   { [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(x => lists(x) ) }
// </Grid.Row>
