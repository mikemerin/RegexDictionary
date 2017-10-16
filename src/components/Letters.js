import React from 'react'
import { Grid } from 'semantic-ui-react'

export const Letters = (props) => {

  // const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } = this.props
  const { words } = props
  console.log(words)


  function lists(letter_words) {

    return (
      <Grid.Column>
        <font size={4}> <strong>{ letter_words[0][0].toUpperCase() }</strong></font>
        <font size={1}> ({ letter_words.length })</font>
      </Grid.Column>
    )
  }

  return (
    <Grid columns={13} celled='internally' textAlign="center" verticalAlign="middle">
      <Grid.Row>
        { [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(x => lists(words[x]) ) }
      </Grid.Row>
      <Grid.Row>
        { [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(x => lists(words[x]) ) }
      </Grid.Row>
    </Grid>
  )

}
