import React, { useState } from "react";
import TextInput from "../toolbox/TextInput";

const ProductDetail = (product, category, onSave, onChange) => {
  return (
    <form onSubmit={onSave}>
      <h3>{product.id ? "Update" : "Add"}</h3>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Error"
      />
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
