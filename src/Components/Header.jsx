import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import classes from "../Store/Header.module.css";
import { useContext, useState } from "react";
import ShowCartResult from "./ShowCartResult";
import { CartInfo } from "../Store/CartInfo";

function Header({ product }) {
  const [showModal, setShowModal] = useState(false);
  const cardInfo = useContext(CartInfo);
  const showCartData = function () {
    setShowModal(true);
  };
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className={`bg-body-tertiary ${classes.stickyNavbar}`}
      >
        <Container>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
              onClick={showCartData.bind(null, product.id)}
              style={{ cursor: "pointer" }}
            >
              Cart:{" "}
              {cardInfo.selectedCards.reduce(
                (acc, curr) => acc + curr.price,
                0
              )}
              $
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showModal && (
        <ShowCartResult
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Header;
