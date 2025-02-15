import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { saveProduct } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  product,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [products, setProduct] = useState({ ...props.product });

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  };

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange()}
      onSave={handleSave()}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id === productId) || null;
  return product;
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(AddOrUpdateProduct);
