import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global';
import MyRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
