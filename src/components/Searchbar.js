import React from 'react'

export function Searchbar(props) {

  const { search } = props

  return (
    <form onSubmit={ props.handleSubmit } >
      <font size={3}>dictionary.match(/</font>
        <input type="text_area" value={ search } placeholder={ search } onChange={ props.handleChange } autoFocus />
      <font size={3}>/)</font>
    </form>
  )

}
