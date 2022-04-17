import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { img, price, service_name, description } = service;
  return (

        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{service_name}</Card.Title>
            <Card.Text>Description: {description}</Card.Text>
            <p>Price: ${price}</p>
            <Button variant="outline-primary">Book Now</Button>
          </Card.Body>
        </Card>
  );
};

export default Service;
