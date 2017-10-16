import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import { Chart } from './components/Chart'
import { Letters } from './components/Letters'
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
      words: [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z ],
      // words: [ a, b, c, d, e, f, g, h, i, j, k, l, m ],
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
      <div>
        <div className="App">
          <header className="App-header">
            <h3>Welcome to the Regex Dictionary!</h3>
          </header>
        </div>
        <Grid columns={2} celled='internally' textAlign="center" verticalAlign="middle">
          <Chart words={ this.state.words } />
        </Grid>
        <Grid columns={13} celled='internally' textAlign="center" verticalAlign="middle">
          <Letters words={ this.state.words } />
        </Grid>
      </div>
    );
  }
}
