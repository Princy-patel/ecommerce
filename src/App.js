import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { CartInfo } from "./Store/CartInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleProduct from "./Components/SingleProduct";

// const Product = [
//   {
//     product: "Product 1",
//     description: "Description 1",
//     price: 10,
//   },
//   {
//     product: "Product 2",
//     description: "Description 2",
//     price: 20,
//   },
//   {
//     product: "Product 3",
//     description: "Description 3",
//     price: 30,
//   },
//   {
//     product: "Product 4",
//     description: "Description 4",
//     price: 40,
//   },
//   {
//     product: "Product 5",
//     description: "Description 5",
//     price: 50,
//   },
//   {
//     product: "Product 6",
//     description: "Description 6",
//     price: 60,
//   },
//   {
//     product: "Product 7",
//     description: "Description 7",
//     price: 70,
//   },
// ];

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const [product, setProduct] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const fetchData = async function () {
    let resource = await fetch("https://dummyjson.com/products");
    let data = await resource.json();
    setProduct(data.products);
  };
  // const addData = function () {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.products);

  //     });
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const addPrice = function (id, data) {
    setCartTotal(cartTotal + data.price);
    setSelectedCards((prevState) => [...prevState, data]);
  };

  return (
    <>
      <CartInfo.Provider value={{ cartTotal, setCartTotal }}>
        <Header
          cartTotal={cartTotal}
          product={product}
          selectedCards={selectedCards}
        />
        <Container className="mt-5">
          <Row>
            {product.map((data, index) => (
              <Col key={index} md={3} className="mb-4">
                <SingleProduct data={data} addPrice={addPrice} />
              </Col>
            ))}
          </Row>
        </Container>
      </CartInfo.Provider>
    </>
  );
}

export default App;
