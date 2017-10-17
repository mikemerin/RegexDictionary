import React from 'react'

export function Searchbar(props) {

  const { regex, search } = props

  return (
    <form onSubmit={ props.handleSubmit } >
      <font size={3}>dictionary.match(</font>
        <input type="text_area" value={ search } placeholder={`${regex}`} onChange={ props.handleChange } autoFocus />
      <font size={3}>)</font>
    </form>
  )

}
