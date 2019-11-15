import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CharacterCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Species: {props.species}</Card.Text>
        <Card.Text>Status: {props.status}</Card.Text>
        <Card.Text>Gender: {props.gender}</Card.Text>
        <Card.Text>Location: {props.location.name}</Card.Text>
        <Button variant="primary">
          <a href={props.url}>Learn more</a>
        </Button>
      </Card.Body>
    </Card>
  );
}
