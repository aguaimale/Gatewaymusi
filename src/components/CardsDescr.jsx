import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const CardsDescr = (props) => {

    const {icon, title, description, } = props



    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/view');
    };


    return (
        <div className='cardDescr'>
            <div className='badgetCard'>
                <div className='badget_dos'>
                    <h4>{icon}</h4>
                </div>
            </div>

            <div className='contentText'>
                <h4>{title}</h4>
                <p>{description}</p>
               
            </div>
            <div className='cardDescrbuttons'>
                <Stack spacing={4} direction="row">
                    <Button  size="small" color="primary" variant="outlined" >Detalles</Button>
                    <Button  size="small" color="primary" variant="contained" onClick={() => handleButtonClick(title)}>Quiero cotizar</Button>
                </Stack>

            </div>
        </div>
    )
}

export default CardsDescr