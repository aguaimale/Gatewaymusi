import React, { useState } from 'react';

const Cards = (props) => {
  const { icono, contenido } = props;
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
            <div className="bottonPrecio">$760/mes</div>
          </div>
        </div>
      </div>
      {isColapsadaVisible && (
        <div className="cardColapsada">
          <p>1-lorem lorem</p>
          <p>2-lorem lorem</p>
          <p>3-lorem lorem</p>
          <p>4-lorem lorem</p>
        </div>
      )}
    </>
  );
}

export default Cards;
