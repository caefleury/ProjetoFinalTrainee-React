import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { UserProvider } from './context/useUserContext';
import { GlobalStyle } from './global';
import MyRoutes from './routes';

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle/>
        <Navbar/>
        <MyRoutes/>
        <Footer/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
