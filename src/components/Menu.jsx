import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderMenuItem = ({ dish }) => {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardImgOverlay body className="ml-3 textblack">
          <CardTitle tag="h3">{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};

class Menu extends Component {
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish}></RenderMenuItem>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row pt-2">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Inicio</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active> Menu </BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Nuestro menú</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu} </div>
      </div>
    );
  }
}

export default Menu;
