import React, { Component } from 'react';
import { Grid, Header, Popup } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import { Chart } from './components/Chart'
import { Last } from './components/Last'
import { Letters } from './components/Letters'
import { Links } from './components/Links'
import { Searchbar } from './components/Searchbar'
// import { Searches } from './components/Searches'
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
      search: "\\w+",
      last: ["\\w+"]
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  // lifecycle methods
  componentWillMount() {
    console.log("mounting")
    console.log("There are " + this.allWords().length + " words that can be searched.")
    if (this.context.router.route.location.pathname !== "/") {
    	const search = this.context.router.route.location.pathname.match(/\/search\/(.+)/)[1].split("/").join("\\")
      const regex = new RegExp(search)
      this.setState({regex: regex, search: search})
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

    var set = true

    try { new RegExp(this.state.search) }
    catch (e) {
      alert(e.message)
      set = false
    }

    if (set) {
      this.setState({
        regex: new RegExp(this.state.search)
      })
    }
  }

  handleButton = (event) => {
    event.preventDefault()
    this.setState({search: this.state.search + event.target.innerText})
  }

  handleAccordion = (event, titleProps) => {
    debugger
  }

  // functions
  allWords() {
    return this.state.dictionary.reduce((a, b) => a.concat(b) )
  }

  render() {

    const matched = this.state.dictionary.map(letter => letter.filter(word => word.match(this.state.regex)) )
    const matchedWords = matched.reduce((a, b) => a.concat(b) )
    const allWords = this.state.dictionary.reduce((a, b) => a.concat(b) )
    const results = `${matchedWords.length } / ${ allWords.length } words (${Math.round(matchedWords.length / allWords.length * 10000) / 100 }%)`

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <Links />
          </header>
        </div>
        <Grid textAlign="center" verticalAlign="middle" stretched={true}>
          <Grid.Column width={7}>
            <Grid.Row>
              { `${this.state.regex}` } returns { results }
              <br /><br /><br />
              <Searchbar search={ this.state.search } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } handleButton={ this.handleButton } />
            </Grid.Row>
            <Grid.Row>
              <Chart words={ matched } />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={2}>
            <Letters words={ matched } />
          </Grid.Column>
          <Grid.Column width={7}>
            Outputs
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


// <Grid.Column width={1}>
//   <Grid celled>
//     <Last hansleAccordian={ this.handleAccordion } />
//   </Grid>
// </Grid.Column>
