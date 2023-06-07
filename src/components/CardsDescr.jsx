import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import placeHolderImg from '../assets/bolsopro.jpeg'




const CardsDescr = (props) => {

    const {title, description, } = props



    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/view');
    };


    return (
        <div className='cardDescr'>
            <div className='cardPlaceHolderImg'>
                <img className='cardimg' src={placeHolderImg} alt="img" />
            </div>
            <div className='cardtext'>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div >
                <Stack spacing={1} direction="row" justifyContent={'flex-end'}>
                    <Button style={{ borderRadius: 20 }}  size="small" color="primary" variant="outlined" >Detalles</Button>
                    <Button style={{ borderRadius: 20 }}  size="small" color="primary" variant="contained" onClick={() => handleButtonClick(title)}>Quiero cotizar</Button>
                </Stack>

            </div>
        </div>
    )
}

export default CardsDescr