import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="image-cover">
        <img width="100%" src="/assets/images/cover_back.png" alt="" />
        <h1 className="text-center h2-cover">Rotisería Mandala</h1>
        <p className="text-center p-cover">
          Cocinamos para ti y te lo llevamos a tu casa o lugar de trabajo
        </p>
      </div>
      <br />
    </div>
  );
};

export default Header;
