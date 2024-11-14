import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tem uma pergunta?</h1>
      <h1 className="primary-heading">Podemos Ajudá-lo!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="nome@e-mail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
