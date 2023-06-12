import React from 'react';
import CardsDescr from './CardsDescr'

export const Planes = () => {



    const infoPlanes = [
        {
            id: '1BP',
            icon: 'BP',
            title: 'Bolso protegido',
            description: 'Cuidá todo lo que llevás en tu bolso, mochila, o porta notebook.'
        },
        {
            id: '2SH',
            icon: 'SH',
            title: 'Seguro hogar',
            description: '¡Asegura 100% online tu hogar este mes!'
        },
        {
            id: '3AP',
            icon: 'AP',
            title: 'Accidentes personales',
            description: 'Te acompañamos con esos imprevistos a los que te puedas enfrentar.'
        },
        {
            id: '4EP',
            icon: 'EP',
            title: 'Empleo protegido',
            description: 'Tu trabajo refeleja tu esfuerzo y es la base de tus ingresos, Aseguralo ya.'
        },
    ]

  


    return (
        <div className='contenedor'>
            <div className='textHeader'>
                <h3>Tu seguro</h3>
                <h3>100% online</h3>
                <p>Contratá sin compromiso, compara los diferentes planes y contratá tu seguro.</p>
                <p></p>
            </div>
            <div className='planCardConteiner'>
                {infoPlanes.map((infoPlan, index) => (
                    <CardsDescr
                        key={index}
                        id={infoPlan.id}
                        icon={infoPlan.icon}
                        title={infoPlan.title}
                        description={infoPlan.description}
                     
                    />

                ))}
            </div>

        </div>
    )
}

export default Planes