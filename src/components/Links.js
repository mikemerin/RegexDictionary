import React from 'react';
import { Grid, Header, Popup } from 'semantic-ui-react'


export const Links = (props) => {

  return (
    <Grid columns={3}>
      <Grid.Column width={4}>
        <Grid>
          <Grid.Column width={2}>
            <Popup position='bottom center' trigger={
              <a href="mailto:MikeMerinWeather@gmail.com" target="_blank" rel="noopener noreferrer"> <Header icon='mail square' verticalAlign='middle' /> </a>
            } content='Email' />
          </Grid.Column>
          <Grid.Column width={2}>
            <Popup position='bottom center' trigger={
              <a href="https://github.com/mikemerin" target="_blank" rel="noopener noreferrer"> <Header icon='github square' verticalAlign='middle' /> </a>
            } content='Github' />
          </Grid.Column>
          <Grid.Column width={2}>
            <Popup position='bottom center' trigger={
              <a href="https://www.linkedin.com/in/mike-merin-00860a64" target="_blank" rel="noopener noreferrer"> <Header icon='linkedin square' verticalAlign='middle' /> </a>
            } content='Linkedin' />
          </Grid.Column>
          <Grid.Column width={2}>
            <Popup position='bottom center' trigger={
              <a href="https://twitter.com/MikeMerin" target="_blank" rel="noopener noreferrer"> <Header icon='twitter square' verticalAlign='middle' /> </a>
            } content='Twitter' />
          </Grid.Column>
          <Grid.Column width={2}>
          <Popup position='bottom center' trigger={
            <a href="https://mikemerin.github.io/regex" target="_blank" rel="noopener noreferrer"> <Header icon='graduation' size='mini' textAlign='left' verticalAlign='middle' /> </a>
          } content='Learn more about regex' />
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column width={8}>
        <Header as='h3' content='Welcome to the Regex Dictionary!' verticalAlign='middle' />
      </Grid.Column>
      <Grid.Column width={4}>
      </Grid.Column>
    </Grid>
  )

}
