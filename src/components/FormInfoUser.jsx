import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const FormInfoUser = (props) => {

  const [fields, setFields] = useState('');

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };
 console.log(fields)
  const handleSubmit = (e) => {
    props.handleTabClick(3);
  };

  return (

    <div className='forms'>
      <p>Ingresá tus datos</p>
      <form type="submit" >
        <Box sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Apellido"
            variant="outlined"
            name="apellido"
            value={fields.apellido || ''}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            name="nombre"
            value={fields.nombre || ''}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Pais"
            variant="outlined"
            name="pais"
            value={fields.pais || ''}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Provincia"
            variant="outlined"
            name="provincia"
            value={fields.provincia || ''}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Localidad"
            variant="outlined"
            name="localidad"
            value={fields.localidad || ''}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1, width: '32ch' }, }} noValidate autoComplete="off">
          <TextField
            type='date'
            id="outlined-basic"
            variant="outlined"
            name="fechaNacimiento"
            value={fields.fechaNacimiento || ''}
            onChange={handleChange}
          />
        </Box>
      </form>

      <div className='contenedorBotones'>
        <Stack spacing={9} direction="row">
          {/* <Button style={{ borderRadius: 20 }} size="medium" color="primary" variant="outlined">Atras</Button> */}
          <Button style={{ borderRadius: 20}} size="medium" color="primary" variant="contained" type='submit' onClick={(e) => handleSubmit(e)}>Siguiente</Button>
        </Stack>
      </div>


    </div>
  )
}

export default FormInfoUser