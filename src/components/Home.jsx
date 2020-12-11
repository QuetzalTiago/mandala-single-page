import React from "react";

const Home = (props) => {
  return (
    <div>
      <div className="container col-12">
        <div className="row">
          <div className="col-sm m-4">
            <h4 className="text-muted font-weight-light h4-desc">
              Sobre nosotros
            </h4>
            <br />
            <p className="text-justify p-desc">
              Somos un emprendimiento familiar que brinda soluciones
              alimentarias a empresas y familias en Ciudad del Plata. La mejor
              calidad posible a un precio accesible.
            </p>
          </div>
          <div className="col-sm m-4">
            <h4 className="text-muted font-weight-light h4-desc">Horario</h4>
            <br />
            <p className="text-justify p-desc">
              Recibimos tus mensajes por Whatsapp de{" "}
              <strong>Lunes a Sábados</strong> de <strong>11:00</strong> a
              <strong> 15:00hs</strong> y de <strong>19:00</strong> a{" "}
              <strong>23:00hs</strong>. También puedes llamarnos por cualquier
              consulta.
            </p>
          </div>
          <div className="col-sm m-4">
            <h4 className="text-muted font-weight-light h4-desc">Delivery</h4>
            <br />
            <p className="text-justify p-desc">
              Entregamos pedidos en toda Ciudad del Plata desde Delta el Tigre
              hasta el Km. 29.500 y en Playa Pascual si coordinamos previamente
              el horario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
