import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards'
import FormInfoUser from './FormInfoUser';
import FormPago from './FormPago';
import ProgressBar from '../components/ProgressBar'
import Navbar from '..//components/Navbar';


const View = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);

  };
  const infoCards = [
    {
      icono: 'A', contenido: 'Plan A', precio: '760', 
      detalles: ['Hasta $32.760 por robo de tu bolso, cartera, billetera, mochila, maletín o riñonera y su contenido (agenda, anteojos, celular, etc.). ',
        ' Hasta $3.444 por robo de tarjetas de compra débito o crédito a tu nombre.',
        'Hasta $3.444 por robo o hurto del DNI, cédula, pasaporte, licencia de conducir, cédula verde y/o llaves de tu casa y auto.'
      ]
    },
    {
      icono: 'B', contenido: 'Plan B', precio: '910', 
      detalles: ['Hasta $32.760 por robo de tu bolso, cartera, billetera, mochila, maletín o riñonera y su contenido (agenda, anteojos, celular, etc.). ',
        ' Hasta $3.444 por robo de tarjetas de compra débito o crédito a tu nombre.',
        'Hasta $3.444 por robo o hurto del DNI, cédula, pasaporte, licencia de conducir, cédula verde y/o llaves de tu casa y auto.'
      ]
    },
    {
      icono: 'C', contenido: 'Plan C', precio: '1216', 
      detalles: ['Hasta $32.760 por robo de tu bolso, cartera, billetera, mochila, maletín o riñonera y su contenido (agenda, anteojos, celular, etc.). ',
        ' Hasta $3.444 por robo de tarjetas de compra débito o crédito a tu nombre.',
        'Hasta $3.444 por robo o hurto del DNI, cédula, pasaporte, licencia de conducir, cédula verde y/o llaves de tu casa y auto.'
      ]
    },
  ]

  const navigate = useNavigate();
  const handleButtonback = () => {
    navigate('/planes');
  };


  return (
    <div>
      <Navbar />
      <div className="tab-content">
        {activeTab === 1 && <div className='textHeader'>
          <h3>Elegí </h3>
          <h3>entre los planes</h3>
          <p>Seleccioná el plan que más se adapte a </p>
          <p>tus necesidades y preferencias.</p>
        </div>}

        {activeTab === 2 && <div className='textHeader'>
          <h3>Completá</h3>
          <h3>con tus datos</h3>
          <p>Tu información servirá para poder  </p>
          <p>realizar la documentación de tu seguro.</p>
        </div>}

        {activeTab === 3 && <div className='textHeader'>
          <h3>Pagá</h3>
          <h3>de manera fácil</h3>
          <p>Elegí un medio de pago y obtené tu seguro al instante.</p>
        </div>}

        <div className="tabs">
          <div className='progressBar'>
            <ProgressBar activeTab={activeTab} />
          </div>
          <div className="tabs_uno">
            <div className={`tab ${activeTab === 1 ? 'active' : ''}`}
            >
              Elegí
            </div>
            <div
              className={`tab ${activeTab === 2 ? 'active' : ''}`}
            >
              Completá
            </div>
            <div
              className={`tab ${activeTab === 3 ? 'active' : ''}`}
            >
              Pagá
            </div>
          </div>
        </div>

        {activeTab === 1 && <div className='cardConteiner'>
          {infoCards.map((infoCards, index) => (
            <Cards 
            key={index} 
            icono={infoCards.icono} 
            contenido={infoCards.contenido}
             precio={infoCards.precio} 
             detalles={infoCards.detalles} 
             onSelect={() => handleCardSelection(infoCards.id)} 
             handleTabClick={handleTabClick}
             />
          ))}
        </div>
        }

        {activeTab === 2 && <div><FormInfoUser handleTabClick={handleTabClick} /></div>}

        {activeTab === 3 && <div><FormPago /></div>}
      </div>
    </div>
  );
};


export default View;
