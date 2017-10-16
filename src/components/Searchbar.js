import React from 'react'
import { Grid, Search } from 'semantic-ui-react'

export function Searchbar(props) {

  const { words } = props

  


  return (
    <Grid className="centered" textAlign="center">
      <Grid.Row>
        <Grid.Column width={8}>
          <Dropdown placeholder='Select a State'
                    selected="custom"
                    fluid search selection options={ stateChoices }
                    onChange={ handleStateChange } />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Dropdown placeholder='Select a Station'
                    fluid search selection options={ filtered_stations }
                    onChange={ handleStationChange } />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}
