import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const FormPago = () => {
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [nombreTarjeta, setNombreTarjeta] = useState('');
    const [dni, setDni] = useState('');
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Número de Tarjeta:', numeroTarjeta);
        console.log('Nombre en la Tarjeta:', nombreTarjeta);
        console.log('DNI:', dni);
        console.log('Términos y Condiciones:', terminos);

        setNumeroTarjeta('');
        setNombreTarjeta('');
        setDni('');
        setTerminos(false);
    };

    return (
        <div className='forms'>
            <p>Ingresá tus datos</p>
            <form onSubmit={handleSubmit}>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Numero de tarjeta" variant="outlined" onChange={(e) => setNumeroTarjeta(e.target.value)} />
                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Titular" variant="outlined" onChange={(e) => setNombreTarjeta(e.target.value)} />
                    <FormHelperText>Como figura en la tarjeta</FormHelperText>

                </Box>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="DNI" variant="outlined" onChange={(e) => setDni(e.target.value)} />
                </Box>
                <div className='checkbox'>
                    <p>Acepto los Términos y Condiciones</p>
                    <input className='chec'
                        type="checkbox"
                        checked={terminos}
                        onChange={(e) => setTerminos(e.target.checked)} />

                </div>

            </form>
            <div className='contenedorBotones'>
                <Stack spacing={9} direction="row">
                    {/* <Button style={{ borderRadius: 20 }}  size="medium" color="primary"variant="outlined">Atras</Button> */}
                    <Button style={{ borderRadius: 20 }}  size="medium" color="primary" variant="contained">Siguiente</Button>
                </Stack>
            </div>
        </div>
    )
}

export default FormPago