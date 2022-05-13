import React from 'react'
import {Button, Input, FormGroup} from './styleComponents'

export const Form = ({modal, onSubmit}) => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('events :', e)
    const {email, password} = e.target.elements
    onSubmit({
      email: email.value,
      password: password.value,
    })
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          '> div': {
            margin: '10px auto',
            width: '100%',
            maxWidth: '300px',
          },
        }}
      >
        <h2>Form</h2>
        <FormGroup>
          <label htmlFor="email">email:</label>
          <Input type="email" id="email" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">password:</label>
          <Input type="password" id="password" />
        </FormGroup>

        <Button>{modal}</Button>
      </form>
    </div>
  )
}
