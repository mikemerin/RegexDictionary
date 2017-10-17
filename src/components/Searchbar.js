import React from 'react'
import { Grid, Input } from 'semantic-ui-react'

export function Searchbar(props) {

  const { words } = props

  const InputExampleInput = () => (
    <Input placeholder='\w+' />
  )


  return (
    <Grid className="centered" textAlign="center">
      <Grid.Row>
        <Grid.Column width={8}>
          <Input placeholder={`${this.state.regex}`} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}
