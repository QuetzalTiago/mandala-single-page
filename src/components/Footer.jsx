import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 col-sm-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">
                  <h6>Inicio</h6>
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <h6>Menu</h6>
                </Link>
              </li>
              <li>
                <Link to="/contactus">
                  <h6>Contacto</h6>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-5 col-sm-3">
            <h5>Dirección</h5>
            <h6> Rocha, Manzana 65 Solar 9</h6>
            <h6>Cuidad del Plata</h6>
            <h6>San José</h6>
          </div>
          <div className="col-5 col-sm-3">
            <h5>Contacto</h5>
            <div>
              <i className="fa fa-phone pr-2"></i>
              <a class="mobilesOnly" href="tel:091801145">
                <h6 className="inline"> 091 801 145</h6>
              </a>
              <br />
              <i className="fa fa-phone pr-2"></i>
              <a class="mobilesOnly" href="tel:23470649">
                <h6 className="inline"> 2347 0649</h6>
              </a>
            </div>
          </div>
          <div className="col-5 col-sm-3">
            <h5>Redes sociales</h5>
            <a
              className="btn btn-social-icon"
              href="http://www.instagram.com/roti_mandala"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              className="btn btn-social-icon"
              href="http://www.facebook.com/rotimandala2017/"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn btn-social-icon btn-whatsapp"
              href="https://wa.me/+598091801145"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <h6>© Copyright 2021 Mandala</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
