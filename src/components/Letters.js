import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

export const Letters = (props) => {

  const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z } = this.props
  console.log("letters")

  return (
    <Grid className="centered" textAlign="center">
      <Grid.Row>
        <Grid.Column width={1}>
          "A"
          { a.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "B"
          { b.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "C"
          { c.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "D"
          { d.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "E"
          { e.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "F"
          { f.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "G"
          { g.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "H"
          { h.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "I"
          { i.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "J"
          { j.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "K"
          { k.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "L"
          { l.length }
        </Grid.Column>
        <Grid.Column width={1}>
          "M"
          { m.length }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}
