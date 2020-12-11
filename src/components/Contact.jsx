import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telnum, setTelnum] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleTelnumChange = (e) => {
    setTelnum(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="container">
      <div className="row pt-2">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Inicio</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contacto</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="col-12">
        <h3>Contactanos</h3>
        <hr />
        <div className="row row-content">
          <div className="col-12 col-sm-4">
            <h5>Ubicación</h5>
            <div class="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13110.467729376465!2d-56.389145!3d-34.7652413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2abd45b241458257!2sRotiser%C3%ADa%20Mandala!5e0!3m2!1sen!2suy!4v1607614068117!5m2!1sen!2suy"
                width="600"
                height="450"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
          <div className="col-14 col-sm-4 offset-sm-3">
            <h5>Dirección</h5>
            <h6> Rocha, Manzana 65 Solar 9</h6>
            <h6>Cuidad del Plata, San José</h6>
            <i className="fa fa-phone pr-2"></i>
            <h6 className="inline"> 091 801 145</h6>
            <br />
            <i className="fa fa-phone pr-2"></i>
            <h6 className="inline"> 2347 0649</h6>
          </div>
        </div>
      </div>
      <hr />
      <div className="row row-content">
        <hr />
        <div className="col-12 pb-3">
          <h3>Envianos tus comentarios</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form>
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                Nombre
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="Nombre"
                  value={name}
                  onChange={handleNameChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="surname" md={2}>
                Apellido
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="surstname"
                  placeholder="Apellido"
                  value={surname}
                  onChange={handleSurnameChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telnum" md={2}>
                Teléfono
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="telnum"
                  placeholder="Número de teléfono"
                  value={telnum}
                  onChange={handleTelnumChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="feedback" md={2}>
                Comentario
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  rows="12"
                  id="feedback"
                  placeholder="Tu comentario aquí"
                  value={feedback}
                  onChange={handleFeedbackChange}
                ></Input>
              </Col>
            </FormGroup>
          </Form>
          <div className="text-center">
            <Button color="primary" size="lg">
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
