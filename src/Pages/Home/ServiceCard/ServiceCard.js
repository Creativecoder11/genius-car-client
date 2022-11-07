import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, IconName } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {_id, title, img, price,} = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-2xl">{title}</h2>
          <div className="flex">
            <p className="text-xl text-orange-500 font-bold">{price}</p>
            <Link to={`/checkout/${_id}`}><FaArrowRight></FaArrowRight></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
