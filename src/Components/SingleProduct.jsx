import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartInfo } from "../Store/CartInfo";
import { ProductDesc } from "./ProductDesc";
import AddQuantity from "./AddQuantity";

function SingleProduct({ data, addPrice }) {
  const [modalInfo, setModalInfo] = useState({
    showModal: false,
    productId: null,
    quantity: false,
  });

  const cartInfo = useContext(CartInfo);

  const onAddPrice = function (id) {
    addPrice(id, data);
    let quantity = cartInfo.selectedCards.filter(
      (cards) => cards.id === id
    ).length;
    if (quantity >= 1) {
      setModalInfo({ quantity: true });
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.thumbnail} />
        <Card.Body>
          <Card.Title
            onClick={() =>
              setModalInfo({ showModal: true, productId: data.id })
            }
          >
            {data.title}
          </Card.Title>
          <Card.Text>{data.description}</Card.Text>
          {modalInfo.quantity ? (
            <AddQuantity />
          ) : (
            <Button variant="primary" onClick={onAddPrice.bind(null, data.id)}>
              ${data.price} - Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
      {modalInfo.showModal && (
        <>
          <ProductDesc
            show={modalInfo.showModal}
            productId={modalInfo.productId}
            handleClose={() => {
              setModalInfo({ showModal: false, productId: null });
            }}
          />
        </>
      )}
    </>
  );
}

export default SingleProduct;
