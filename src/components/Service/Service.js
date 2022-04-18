import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const {id, img, price, service_name, description } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = id =>{
    navigate(`/service/${id}`);
  }
  return (

        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{service_name}</Card.Title>
            <Card.Text>Description: {description}</Card.Text>
            <p>Price: ${price}</p>
            <Button onClick={()=> navigateToServiceDetail(id)} variant="outline-primary">Book Now</Button>
          </Card.Body>
        </Card>
  );
};

export default Service;
