import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pronto para Comer",
      text: "Sua comida vem pronta para degustar e aproveitar o seu tempo de pausa.",
    },
    {
      image: ChooseMeals,
      title: "Faça a sua Dieta",
      text: "Escolha o que você precisa sem precisar trocar seu cardápio.",
    },
    {
      image: DeliveryMeals,
      title: "Entrega Rápida",
      text: "Fazemos entregas rápidas para que você não perca o horário.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso trabalho</p>
        <h1 className="primary-heading">Como funciona?</h1>
        <p className="primary-text">
          Aprenda como trazemos o melhor para as suas refeições e rotina.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
