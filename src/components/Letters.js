import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

export const Letters = (props) => {

  // const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } = this.props
  const { words } = props
  console.log(words)


  function lists(l, letter) {
    var string = ""
    string += `"${l}" - ${letter.length}`
    // for (let x = 1; x < 20; x++ ) {
    //   var n = letter.filter(w => w.length === x)
    //   string += `${x} - ${n.length}\n`
    // }
    // var n = letter.filter(w => w.length >= 20)
    // string += `20+ - ${n.length}`
    return (
      <Grid.Column>
        { l }
        <br />
        { letter.length }
      </Grid.Column>
    )
  }

  return (
    <Grid.Row>
      { lists("A", words[0]) }
      <Grid.Column>
        "B"

      </Grid.Column>
      <Grid.Column>
        "C"

      </Grid.Column>
      <Grid.Column>
        "D"

      </Grid.Column>
      <Grid.Column>
        "E"

      </Grid.Column>
      <Grid.Column>
        "F"

      </Grid.Column>
      <Grid.Column>
        "G"

      </Grid.Column>
      <Grid.Column>
        "H"

      </Grid.Column>
      <Grid.Column>
        "I"

      </Grid.Column>
      <Grid.Column>
        "J"

      </Grid.Column>
      <Grid.Column>
        "K"

      </Grid.Column>
      <Grid.Column>
        "L"

      </Grid.Column>
      <Grid.Column>
        "M"

      </Grid.Column>
    </Grid.Row>
  )

}
