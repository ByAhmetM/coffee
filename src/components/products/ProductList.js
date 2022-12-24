import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Badge, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

function ProductList(props) {
  useEffect(() => {
    props.actions.getProducts();
  }, []);
  return (
    <div>
      <Badge color="warning">Products</Badge>
      <Badge color="success">{props.currentCategory.categoryName}</Badge>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>ingredients</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.ingredients}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
