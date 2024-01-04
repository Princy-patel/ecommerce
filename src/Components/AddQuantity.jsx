import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { CartInfo } from "../Store/CartInfo";

function AddQuantity({ data }) {
  const [totalProduct, setTotalProduct] = useState([]);

  const cardInfo = useContext(CartInfo);

  // Add product when i click on add button
  const addProducts = function (id) {
    let newProduct = cardInfo.selectedCards.find(
      (products) => products.id === id
    );

    cardInfo.setSelectedCards([...cardInfo.selectedCards, newProduct]);
    setTotalProduct(cardInfo.selectedCards.filter((cards) => cards.id === id));
  };

  // Remove product when i click on "-" button
  const removeProduct = function (id) {
    let updatedCards = [...cardInfo.selectedCards];
   
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Button
          style={{ zIndex: "0" }}
          variant="danger"
          onClick={removeProduct.bind(null, data.id)}
        >
          -
        </Button>
        <Form.Control
          aria-label="Dollar amount (with dot and two decimal places)"
          value={totalProduct.length + 1}
        />
        <Button
          style={{ zIndex: "0" }}
          variant="success"
          onClick={addProducts.bind(null, data.id)}
        >
          +
        </Button>
      </InputGroup>

      {/* {product && <ShowCartResult counter={counter} />} */}
    </>
  );
}

export default AddQuantity;
