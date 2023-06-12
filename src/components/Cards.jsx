import React, { useState } from 'react';

const Cards = (props) => {
  const { icono, contenido, precio, detalles, } = props;
  const [cardSelected, setCardSelected] = useState(false);
  const [isColapsadaVisible, setIsColapsadaVisible] = useState(false);

  function cardSelection() {
    setCardSelected(!cardSelected);

  }

  function toggleColapsada() {
    setCardSelected(!cardSelected);
    setIsColapsadaVisible((prevVisible) => !prevVisible);
  }

  const cardClass = cardSelected ? 'card card-selected' : 'card';

  return (
    <>
      <div className={cardClass}>
        <div className="cardHeader">
          <div className='badget'>{icono}</div>
          <div className='planesCardInfo'>
            <h3>{contenido}</h3>
            <p style={{ color: 'red' }} onClick={toggleColapsada}>
              {isColapsadaVisible ? 'Menos detalles <' : 'Más detalles   >'}
            </p>
          </div>
          <div className='Imgcontainer'>
            <div className="bottonPrecio" onClick={() => props.handleTabClick(2)}>${precio}/mes</div>
          </div>
        </div>
      </div>
      {isColapsadaVisible && (
        <div className="cardColapsada">
          <div className='planText'>
            <strong><p>Coberturas incluidas</p></strong>
            <strong className='resaltado'>
              <p>Recibís hasta $32.760, según que objetos
                te hayan robado:</p></strong>
          </div>
          <ul className='ulplanText'>
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
