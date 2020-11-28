import 'react-perfect-scrollbar/dist/css/styles.css';
import React,{useEffect} from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import axios from 'axios'
const App = () => {
  const routing = useRoutes(routes);
  
  const handleApi = async() =>{
    
    const res = await axios.get('https://science-ecosystem.firebaseio.com/users ')
   
    return res.data
  }
  useEffect(()=>{
    
    console.log('data',handleApi())
  },[])
    
    
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
