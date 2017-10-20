import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

export function Searchbar(props) {

  const { search } = props

  return (
    <div>
      <form onSubmit={ props.handleSubmit } >
        <font size={3}>dictionary.match(/</font>
          <input type="text_area" value={ search } placeholder={ search } onChange={ props.handleChange } />
        <font size={3}>/)</font><br /><br />
      </form>
      <br />
      Click to add to your search!<br />
      <Button.Group>
        <Popup position='bottom center' trigger={<Button onClick={ props.handleButton } compact={true} >^</Button>} content='start of the line' />
        <Popup position='bottom center' trigger={<Button onClick={ props.handleButton } compact={true} >\w</Button>} content='word character (any letter)' />
        <Popup position='bottom center' trigger={<Button onClick={ props.handleButton } compact={true} >*</Button>} content='at least 0' />
        <Popup position='bottom center' trigger={<Button onClick={ props.handleButton } compact={true} >+</Button>} content='at least 1 (greedy)' />
        <Popup position='bottom center' trigger={<Button onClick={ props.handleButton } compact={true} >?</Button>} content='do the least possible' />
        <Popup position='bottom center' trigger={<Button onClick={ props.handleButton } compact={true} >$</Button>} content='end of the line' />
      </Button.Group>
    </div>
  )

}
