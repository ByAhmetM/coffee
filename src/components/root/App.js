import React from "react";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";
import { Row, Col } from "reactstrap";
function App() {
  return <div>
    <div>
      <Row>
        <Col xs="3"><CategoryList/></Col>
        <Col xs="9"><ProductList/></Col>
      </Row>
    </div>
  </div>;
}

export default App;
