import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row pt-2">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Nuestro menú</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const RenderDish = (dish) => {
  if (dish != null) {
    dish = dish.dish;
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg src={dish.image} alt={dish.name}></CardImg>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h1>{dish.name}</h1>
          {dish.description}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
