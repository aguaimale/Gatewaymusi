import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import View from './components/view'
import Planes from './components/Planes'
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#ED1C24',
      },
    
      primary: {
        main: 'rgba(232, 222, 248, 1)',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Planes />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Router>
    </ThemeProvider>

  )
}

export default App
