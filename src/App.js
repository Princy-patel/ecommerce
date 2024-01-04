import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { CartInfo } from "./Store/CartInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleProduct from "./Components/SingleProduct";

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const [product, setProduct] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const fetchData = async function () {
    let resource = await fetch("https://dummyjson.com/products");
    let data = await resource.json();
    setProduct(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CartInfo.Provider
        value={{ cartTotal, setCartTotal, selectedCards, setSelectedCards }}
      >
        <Header cartTotal={cartTotal} product={product} />
        <Container className="mt-5">
          <Row>
            {product.map((data, index) => (
              <Col key={index} md={3} className="mb-4">
                <SingleProduct
                  data={data}
                  // addMoreProducts={addMoreProducts}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </CartInfo.Provider>
    </>
  );
}

export default App;
