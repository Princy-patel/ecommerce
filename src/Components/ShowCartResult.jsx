import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CartInfo } from "../Store/CartInfo";

function ShowCartResult({ show, handleClose }) {
  const cardInfo = useContext(CartInfo);
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total Quantities and Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Quantity: <b>{cardInfo.selectedCards.length}</b>
        </Modal.Body>
        <Modal.Body>
          Products: 
          {cardInfo.selectedCards.map((productsTitle) => (
            <b><span> {productsTitle.title},</span></b>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowCartResult;
