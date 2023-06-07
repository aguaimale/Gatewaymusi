import React, { useState } from 'react';

const Cards = (props) => {
  const { icono, contenido, precio, detalles } = props;
  const [cardSelected, setCardSelected] = useState(false);
  const [isColapsadaVisible, setIsColapsadaVisible] = useState(false);

  function cardSelection() {
    setCardSelected(!cardSelected);
  }

  function toggleColapsada() {
    setIsColapsadaVisible((prevVisible) => !prevVisible);
  }

  const cardClass = cardSelected ? 'card card-selected' : 'card';

  return (
    <>
      <div className={cardClass} onClick={cardSelection}>
        <div className="cardHeader">
          <div className='badget'>{icono}</div>
          <div className='planesCardInfo'>
            <h3>{contenido}</h3>
            <p style={{ color: 'red' }} onClick={toggleColapsada}>
              Mas detalles.
            </p>
          </div>
          <div className='Imgcontainer'>
            <div className="bottonPrecio">${precio}/mes</div>
          </div>
        </div>
      </div>
      {isColapsadaVisible && (
        <div className="cardColapsada">
          <ul>
            <li>{detalles[0]}</li>
            <li>{detalles[1]}</li>
            <li>{detalles[2]}</li>
          </ul>
         
        </div>
      )}
    </>
  );
}

export default Cards;
