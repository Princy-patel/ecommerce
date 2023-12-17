import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { CartInfo } from "../Store/CartInfo";
import ShowCartResult from "./ShowCartResult";

function AddQuantity({ data, addMoreProducts }) {
  const [counter, setCounter] = useState([]);
  const [product, setProduct] = useState(false);

  const cardInfo = useContext(CartInfo);

  const addProducts = function (id) {
    let newProduct = cardInfo.selectedCards.filter(
      (products) => products.id === id
    );
    cardInfo.setSelectedCards([...cardInfo.selectedCards, newProduct]);
    // setProduct(true)

    console.log(cardInfo.selectedCards);

    // addMoreProducts(id, setCounter, counter);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Button
          style={{ zIndex: "0" }}
          variant="danger"
        >
          -
        </Button>
        <Form.Control
          aria-label="Dollar amount (with dot and two decimal places)"
          value={counter.length}
        />
        <Button
          style={{ zIndex: "0" }}
          variant="success"
          onClick={addProducts.bind(null, data.id)}
        >
          +
        </Button>
      </InputGroup>

      {product && <ShowCartResult counter={counter} />}
    </>
  );
}

export default AddQuantity;
