import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre nós</p>
        <h1 className="primary-heading">
          A comida é uma parte importante para uma dieta balanceada
        </h1>
        <p className="primary-text">
          Pare de perder tempo preparando o sua comida e procurando
          pelo melhores preços dos alimentos nos supermercados da 
          sua cidade!
        </p>
        <p className="primary-text">
          Vem ser feliz com a Foodie e traga à sua vida o melhor
          da comida natural. Feita com amor para você desfrutar do melhor! 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Veja mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Assista o vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
