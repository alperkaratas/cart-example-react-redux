import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

const CategoryList = (props) => {
  useEffect(() => {
    props.actions.getCategories();
  });

  const selectCategory = (category) => {
    props.actions.changeCategories(category);
    props.actions.getProducts(category.id);
  };
  return (
    <div>
      <br />
      <Badge style={{ fontSize: 27 }} color="warning">
        Categories
      </Badge>
      <br /> <br />
      <ListGroup>
        {props.categories.map((category) => (
          <ListGroupItem
            active={category.id === props.currentCategory.id}
            onClick={() => selectCategory(category)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategories: bindActionCreators(
        categoryActions.changeCategories,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
