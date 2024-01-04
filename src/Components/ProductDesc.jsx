import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

export const ProductDesc = ({ productId, show, handleClose }) => {
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = function () {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {isLoading ? (
          <Spinner animation="border" role="status" className="m-5">
            <span className="visually-hidden fs-4">Loading...</span>
          </Spinner>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{productData?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{productData.description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};
