import React from 'react'
import { Grid } from 'semantic-ui-react'

export const Letters = (props) => {

  const letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  const { words } = props

  function lists(position) {

    var list = words[position].slice(0,5).map((word, i) => {
      return <font size={1} key={i}><a href={`http://www.dictionary.com/browse/${word}`} target={"_blank"}><p>{word}</p></a></font>
    })

    // style={{ height: 170, overflow: scroll}}

    // return (
    //   <Grid.Column key={position} >
    //     <font size={4}> <strong>{ letters[position] }</strong></font><br />
    //     <font size={1}>({ words[position].length })</font><br />
    //     { list }
    //   </Grid.Column>
    // )

    return (
      <Grid.Row key={position} >
        <font size={4}> <strong>{ letters[position] }</strong></font><br />
        <font size={1}>({ words[position].length })</font><br />
      </Grid.Row>
    )
  }

  return (
    <Grid celled textAlign="center" verticalAlign="middle" >
      <Grid.Row>
        { [...Array(26).keys()].map(x => lists(x) ) }
      </Grid.Row>
    </Grid>
  )

}
