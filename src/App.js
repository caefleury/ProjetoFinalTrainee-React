import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global';
import MyRoutes from './routes';
import { useEffect } from 'react';
import { api } from './services/api';

function App() {

  const getPartners = async () => {
    const response = await api.get('/partners/index');
    console.log(response.data);
  }

  useEffect(() => {
    getPartners()
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
