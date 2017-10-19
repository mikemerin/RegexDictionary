import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { Chart } from './components/Chart'
import { Letters } from './components/Letters'
import { Searchbar } from './components/Searchbar'
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
      dictionary: [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z ],
      regex: /\w+/,
      search: "\\w+"
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  // lifecycle methods
  componentWillMount() {
    console.log("mounting")
    console.log("There are " + this.allWords().length + " words that can be searched.")
    this.matched()
    if (this.context.router.route.location.pathname !== "/") {
    	const regex = this.context.router.route.location.pathname.match(/\/search\/(.+)/)[1]
    	this.setState({regex: regex, search: regex})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if the search changed
    if (prevState.regex !== this.state.regex)
      { this.context.router.history.push(`/search/${this.state.search}`) }
  }

  // handlers
  handleChange = (event) => {
    this.setState({ search: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      regex: new RegExp(this.state.search, "i")
    })
  }

  // functions
  matched = () => {
    return this.state.dictionary.map(letter => letter.filter(word => word.match(this.state.regex)) )
  }

  matchedWords = () => {
    return this.state.dictionary.map(letter => letter.filter(word => word.match(this.state.regex))).reduce((a, b) => a.concat(b) )
  }

  results = () => {
    return `${this.matchedWords().length } / ${ this.allWords().length } words (${Math.round(this.matchedWords().length / this.allWords().length * 10000) / 100 }%)`
  }

  allWords() {
    return this.state.dictionary.reduce((a, b) => a.concat(b) )
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h3>Welcome to the Regex Dictionary!</h3>
          </header>
        </div>
        <Grid columns={13} textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Searchbar search={ this.state.search } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
              <br />
              { `${this.state.regex}` } returns { this.results() }
            </Grid.Column>
            <Grid.Column width={8}>
              <Chart words={ this.matched() } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Letters words={ this.matched() } />
      </div>
    );
  }
}
