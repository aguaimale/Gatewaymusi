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
    {  icono: 'A', contenido: 'GOLD', imagen: ''},
    {  icono: 'B', contenido: 'PLATINUM', imagen: ''},
    {  icono: 'C', contenido: 'BLACK', imagen: ''}
  ]

 

  const navigate = useNavigate();
  const handleButtonback = () => {
    navigate('/planes');
  };


  return (
    <div>
      <Navbar/>
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
            Producto
          </div>
          <div
            className={`tab ${activeTab === 4 ? 'active' : ''}`}
            
          >
            Pagá
          </div>
        </div>
       

      </div>

      <div className="tab-content">
        {activeTab === 1 &&
          <div className='contenedor'>
            <div className='contentText'>
              <h2>Elegí </h2>
              <h3>entre los planes</h3>
              <p>Seleccióna el plan que más
                se adapte a tus necesidades</p>
              <h5>PLANES</h5>
            </div>
            <div className='cardConteiner'>
              {infoCards.map((infoCards, index) => (
                <Cards key={index} icono={infoCards.icono} contenido={infoCards.contenido} imagen={infoCards.imagen} onSelect={() => handleCardSelection(infoCards.id)} />
              ))}
            </div>
            <div className='contenedorBotones'>
              <Stack spacing={9} direction="row">
                <Button style={{ borderRadius: 8 }} size="medium" color="primary" variant="outlined" onClick={handleButtonback} >Atras</Button>
                <Button style={{ borderRadius: 8 }} size="medium" color="primary" variant="contained" onClick={() => handleTabClick(2)} >Obtener seguro</Button>
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
          <FormInfoUser handleTabClick={handleTabClick}/>
  
        </div>
        }

        {activeTab === 3 && <div className='contenedor'>
          <div className='contentText'>
            <h2>Datos del Producto</h2>
            <h3>texto de ejemplo</h3>
            <p>Elegí un medio de pago y obtené
              tu seguro al instante.</p>
          </div>
          <Stack spacing={9} direction="row">
            <Button style={{ borderRadius: 8 }} size="medium" color="primary" variant="outlined">Atras</Button>
            <Button style={{ borderRadius: 8 }} size="medium" color="primary" variant="contained" onClick={() => handleTabClick(4)}>Siguiente</Button>
          </Stack>
        </div>
        }
        {activeTab === 4 && <div className='contenedor'>
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
