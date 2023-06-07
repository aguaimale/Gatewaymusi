import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards'
import FormInfoUser from './FormInfoUser';
import FormPago from './FormPago';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ProgressBar from '../components/ProgressBar'
import Navbar from '..//components/Navbar';


const View = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);

  };
  const infoCards = [
    {
      icono: 'A', contenido: 'Plan A', precio: '760', detalles: ['Incendio inmueble  $ 3.570.000 ',
        'Incendio de bienes  $ 267.750', 'Robo o hurto $ 200.000']
    },
    { icono: 'B', contenido: 'Plan B', precio: '910', detalles: ['Incendio inmueble  $ 3.570.000 ',
    'Incendio de bienes  $ 267.750', 'Robo o hurto $ 200.000'] 
  },
    { icono: 'C', contenido: 'Plan C', precio: '1216', detalles: ['Incendio inmueble  $ 3.570.000 ',
    'Incendio de bienes  $ 267.750', 'Robo o hurto $ 200.000'] 
  },
  ]



  const navigate = useNavigate();
  const handleButtonback = () => {
    navigate('/planes');
  };


  return (
    <div>
      <Navbar />
      <div className="tabs">
        <div className='progressBar'>
          <ProgressBar activeTab={activeTab} />
        </div>
        <div className="tabs_uno">
          <div
            className={`tab ${activeTab === 1 ? 'active' : ''}`}


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

      <div className="tab-content">
        {activeTab === 1 &&
          <div className='contenedor'>
            <div className='contentText'>
              {/* <h2>Elegí </h2> */}
              <h3>Comprá tu seguro</h3>
              <h3>online en tres pasos</h3>
              <p>Es muy fácil, solo elegí uno de los planes</p>
              <p>que te presentamos a continuación.</p>
              <h5></h5>
            </div>
            <div className='cardConteiner'>
              {infoCards.map((infoCards, index) => (
                <Cards key={index} icono={infoCards.icono} contenido={infoCards.contenido} precio={infoCards.precio} detalles={infoCards.detalles} onSelect={() => handleCardSelection(infoCards.id)} />
              ))}
            </div>
            <div className='contenedorBotones'>
              <Stack spacing={9} direction="row">
                <Button style={{ borderRadius: 20 }} size="medium" color="primary" variant="outlined" onClick={handleButtonback} >Atras</Button>
                <Button style={{ borderRadius: 20 }} size="medium" color="primary" variant="contained" onClick={() => handleTabClick(2)} >Obtener seguro</Button>
              </Stack>
            </div>

          </div>
        }

        {activeTab === 2 && <div className='contenedor'>
          <div className='contentText'>
            <h2>Completá</h2>
            <h3>con tus datos</h3>
            <p>tu información será utilizada para
              la documentación requerida</p>
          </div>
          <FormInfoUser handleTabClick={handleTabClick} />

        </div>
        }


        {activeTab === 3 && <div className='contenedor'>
          <div className='contentText'>
            <h2>Pagá</h2>
            <h3>de  manera fácil</h3>
            <p>Elegí un medio de pago y obtené
              tu seguro al instante.</p>
          </div>
          <FormPago />
        </div>
        }
      </div>
    </div>
  );
};


export default View;
