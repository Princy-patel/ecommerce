import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AddQuantity() {
  return (
    <>
      <InputGroup className="mb-3">
        <Button variant="danger">Danger</Button>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
        <Button variant="success">Success</Button>
      </InputGroup>
    </>
  );
}

export default AddQuantity;
