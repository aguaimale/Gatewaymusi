import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';



const FormInfoUser = (props) => {

  const [fields, setFields] = useState('');

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    props.handleTabClick(3);
  };
  
  
  return (

    <div className='forms'>
      <p>Ingresá tus datos</p>
      <form type="submit" >
        <Box sx={{ '& > :not(style)': { m: 1,width: '35.5ch' } }} onSubmit={handleSubmit} noValidate autoComplete="off">
          {/* <InputLabel id="demo-simple-select-label">Pais</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Pais"
            onChange={handleChange}
           
          >
            <MenuItem value={10}>pais</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1,width: '35.5ch' } }} onSubmit={handleSubmit} noValidate autoComplete="off">
          {/* <InputLabel id="demo-simple-select-label">Provincia</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Provincia"
            onChange={handleChange}
          >
            <MenuItem value={10}>Provincia</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1, width: '35.5ch' } }} onSubmit={handleSubmit} noValidate autoComplete="off">
          {/* <InputLabel id="demo-simple-select-label">Localidad</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Localidad"
            onChange={handleChange}
          >
            <MenuItem value={10}>Localidad</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="DNI (Solo personas físicas)" variant="outlined" />
        </Box>
        <FormHelperText sx={{m:1}} >Sexo</FormHelperText>
        <div className='ButtonSexoDiv'>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                width:115,
                border: '1px solid rgba(73, 69, 79, 1)'
              }}>Masculino
            </Button>
            <Button
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                width:115,
                border: '1px solid rgba(73, 69, 79, 1)'
              }}>Femenino</Button>
          </ButtonGroup>
        </div>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        </Box>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Apellido" variant="outlined" />
        </Box>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }} noValidate autoComplete="off">
          <TextField type='date' id="outlined-basic" variant="outlined" />
        </Box>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Domicilio" variant="outlined" />
        </Box>
        <Box component="form" sx={{ '& > :not(style)': { m: 0.8, width: '9ch' }, }} noValidate autoComplete="off">
          <FormHelperText>Telefono</FormHelperText>
          <TextField id="outlined-basic" label="Sin 0" variant="outlined" />
          <TextField style={{ width: '20ch' }} id="outlined-basic" label="Sin 15" variant="outlined" />
         <div className="texthelper">
         <FormHelperText>Código de área</FormHelperText><FormHelperText>Número telefónico</FormHelperText>
         </div>
        </Box>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '30ch' }, }} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1, width: '35.5ch' } }} onSubmit={handleSubmit} noValidate autoComplete="off">
          {/* <InputLabel id="demo-simple-select-label">Actividad economica</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Actividad economica</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <div className="ButtonSexoDiv">
        <InputLabel>¿Sos una persona politicamente expuesta?</InputLabel>
        <FormHelperText> </FormHelperText>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            
          >
            <Button
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                width:115,
                border: '1px solid rgba(73, 69, 79, 1)'
              }}
            >Si</Button>
            <Button
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                width:115,
                border: '1px solid rgba(73, 69, 79, 1)'
              }}
            >No</Button>
          </ButtonGroup>
        </div>


      </form>

      <div className='contenedorBotones'>
        <Stack spacing={2} direction="row" alignItems={'flex-end'}>
          <Button style={{ borderRadius: 20 }} size="medium" color="secondary" variant="outlined">Atras</Button> 
          <Button style={{ borderRadius: 20 }} size="medium" color="secondary"  variant="contained" type='submit' onClick={(e) => handleSubmit(e)}>Siguiente</Button>
        </Stack>
      </div>


    </div>
  )
}

export default FormInfoUser