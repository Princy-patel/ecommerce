import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ShowCartResult({ show, handleClose, selectedCards }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total Quantities and Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Quantity: <b>{selectedCards.length}</b>
        </Modal.Body>
        <Modal.Body>
          Products: 
          {selectedCards.map((productsTitle) => (
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
