import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddMessage = ({ setMessages }) => {
  // console.log(props.setMessages)
  const [newName, setNewName] = useState("")
  const [newMessage, setNewMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    setMessages(messages => [...messages, { name: newName, text: newMessage }])
    setNewName("")
    setNewMessage("")
  }
  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      {/* <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={newName} onChange={(e) => {setNewName(e.target.value)}}/>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>"I am thinking of a number between 1 and 100. Guess the Lucky Number!"</Form.Label>
        <Form.Control type="text" value={newMessage} onChange={(e) => { setNewMessage(e.target.value) }} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guess
      </Button>
    </Form>
  )
}

export default AddMessage