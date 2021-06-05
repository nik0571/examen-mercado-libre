import React from "react";
import IconFreeShipping from '../../assets/ic_shipping.png';

const CardComponent: React.FC = () => {

  return (
    <div className="card-wrapper">
      <div className="content-img">
        <img src="http://lorempixel.com/180/180/" width="180" alt="Image" />
      </div>
      <div className="content-description">
        <h2 className="price">
          <span>$ 1.980</span>
          <img className="icon-free-shipping" src={IconFreeShipping} width="18" alt="Free Shipping" />
        </h2>
        <p className="title">Apple Ipod Touche 5g 16gb Negro Igual A Nuevo</p>
        <p className="subtitle">Completo Unico</p>
      </div>
      <div className="content-metadata">
        <span>Capital Federal</span>
      </div>
    </div>
  );
};

export default CardComponent;
