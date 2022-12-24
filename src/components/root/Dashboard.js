import React from "react";
import { Row, Col } from "reactstrap";
import ProductList from "../products/ProductList";
import CategoryList from "../categories/CategoryList"
function Dashboard() {
  return (
    <div>
      <Row>
        <Col xs="3"><CategoryList/></Col>
        <Col xs="9"><ProductList/></Col>
      </Row>
    </div>
  );
}

export default Dashboard;
