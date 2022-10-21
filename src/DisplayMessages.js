import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const DisplayMessages = ({ messages }) => {
   return (
      <ListGroup className="mb-3">
         {messages.map((message, key) => 
            (
            // <ListGroup.Item key={key}>{message.name}: {message.text}</ListGroup.Item>
            <ListGroup.Item key={key}> {message.text}</ListGroup.Item>
         ))}
      </ListGroup>
   );
};

export default DisplayMessages;
