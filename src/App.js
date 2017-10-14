import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import './App.css';

import { a } from './dictionary/a'
import { b } from './dictionary/b'
import { c } from './dictionary/c'
import { d } from './dictionary/d'
import { e } from './dictionary/e'
import { f } from './dictionary/f'
import { g } from './dictionary/g'
import { h } from './dictionary/h'
import { i } from './dictionary/i'
import { j } from './dictionary/j'
import { k } from './dictionary/k'
import { l } from './dictionary/l'
import { m } from './dictionary/m'
import { n } from './dictionary/n'
import { o } from './dictionary/o'
import { p } from './dictionary/p'
import { q } from './dictionary/q'
import { r } from './dictionary/r'
import { s } from './dictionary/s'
import { t } from './dictionary/t'
import { u } from './dictionary/u'
import { v } from './dictionary/v'
import { w } from './dictionary/w'
import { x } from './dictionary/x'
import { y } from './dictionary/y'
import { z } from './dictionary/z'

export default class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      words: [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z],
      regex: "\\w"
    }
  }

  componentWillMount() {
    console.log("mounting")
    console.log(this.all_words())
  }

  handleSearchChange = (event, result) => {
    event.preventDefault()
    // this.setState({  })
  }

  all_words() {
    return this.state.words.reduce((a, b) => a.concat(b) )
  }

  // var words_one = "abcde"
  // var words_two = "fghij"
  // var words_three = "klmnopqrstuvwxyz"

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to the Regex Dictionary!</h2>
          <p>There are { this.all_words().length } words in our dictionary.</p>
        </header>
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
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
