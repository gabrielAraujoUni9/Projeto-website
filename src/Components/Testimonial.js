import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Depoimentos</p>
        <h1 className="primary-heading">O que Andam Falando?</h1>
        <p className="primary-text">
          "Hoje eu posso comer de forma regulada e balanceada, 
          porque posso confiar na Foodie sempre preparando a minha 
          dieta e trazendo eficiência ao meu dia a dia."
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Adorei a empresa! Muito séria e compromissada com o cliente.
          Sempre peço para o meu almoço!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Lucas Barros</h2>
      </div>
    </div>
  );
};

export default Testimonial;
