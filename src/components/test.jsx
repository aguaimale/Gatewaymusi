import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';
import FormInfoUser from './FormInfoUser';
import FormPago from './FormPago';
import { connect } from 'react-redux';
import { seleccionarPlan, completarInformacion, completarPago } from '../redux/actions/index';

const View = ({ plan, seleccionarPlan, completarInformacion, completarPago }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const infoCards = [
    { icono: 'A', contenido: 'GOLD', imagen: '' },
    { icono: 'B', contenido: 'PLATINUM', imagen: '' },
    { icono: 'C', contenido: 'BLACK', imagen: '' }
  ]

  const navigate = useNavigate();
  const handleButtonback = () => {
    navigate('/planes');
  };

  const handleNextClick = () => {
    if (activeTab === 1) {
      // Lógica para guardar el plan seleccionado en el store
      seleccionarPlan(plan);
    }

    // No es necesario realizar lógica para las pestañas 2 y 3
    // ya que el componente FormInfoUser y FormPago deben encargarse de actualizar Redux directamente.

    setActiveTab(activeTab + 1);
  };

  return (
    <div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Elegí
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Completá
        </div>
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Pagá
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 1 && (
          <div className='contenedor'>
            <div className='contentText'>
              <h2>Elegí </h2>
              <h3>entre los planes</h3>
              <p>Seleccióna el plan que más se adapte a tus necesidades</p>
              <h5>PLANES</h5>
            </div>
            <div className='cardConteiner'>
              {infoCards.map((infoCard, index) => (
                <Cards key={index} icono={infoCard.icono} contenido={infoCard.contenido} />
              ))}
            </div>
            <div className='contenedorBotones'>
              <button className='buttonAtras' type='button' onClick={handleButtonback}>
                Atras
              </button>
              <button className='button' type='button' onClick={handleNextClick}>
                Siguiente
              </button>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className='contenedor'>
            <div className='contentText'>
              <h2>Completá</h2>
              <h3>con tus datos</h3>
              <p>tu información será utilizada para la documentación requerida</p>
            </div>
            <FormInfoUser />
          </div>
        )}

        {activeTab === 3 && (
          <div className='contenedor'>
            <div className='contentText'>
              <h2>Pagá</h2>
              <h3>de manera fácil</h3>
              <p>Elegí un medio de pago y obtené tu seguro al instante.</p>
            </div>
            <FormPago />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // Mapeo de los datos necesarios desde el store de Redux
  plan: state.plan,
});

const mapDispatchToProps = {
  // Mapeo de las acciones para modificar el store de Redux
  seleccionarPlan,
  completarInformacion,
  completarPago,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
