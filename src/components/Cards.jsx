import React, { useState, useEffect } from 'react';


const Cards = (props) => {
  const { icono, contenido, imagen } = props;
  const [cardSelected, setCardSelected] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }



  function cardSelection() {
    setCardSelected(true);
  }

  const cardClass = cardSelected ? 'card card-selected' : 'card';

  return (
    <div className={cardClass} onClick={cardSelection}>
      <div className='badget'>{icono}</div>
      <div className='planesCardInfo'>
        <h3>{contenido}</h3>
        <p style={{ color: 'red' }} onClick={toggleDetails}>
          Mas detalles.
        </p>
        {showDetails && (
          <div className="detallesAdicionales">
            <p>Incendio inmueble $ 3.570.000</p>
            <p>Incendio de bienes $ 267.750</p>
            <p>Robo o hurto $ 200.000</p>
          </div>
        )}
      </div>
      <div className='Imgcontainer'>
        <div className="bottonPrecio">$760/mes</div>
      </div>
    </div>
  );
}

export default Cards;
