import React from 'react';
import { Button } from 'semantic-ui-react'

export const Searches = (props) => {

  return (
    <Button.Group vertical>
      <Button>Feed</Button>
      <Button>Messages</Button>
      <Button>Events</Button>
      <Button>Photos</Button>
    </Button.Group>
  )
}
