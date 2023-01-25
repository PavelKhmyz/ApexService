import './App.scss';
import { Footer } from './components/footer/Fotter';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MapRotation } from './components/mapRotation/MapRotation';
import { ServerStatus } from './components/serverStatus/ServerStatus';
import { SignIn } from './components/signIn/SignIn';
import { NewsPage } from './components/news/NewsPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/maps' element={<MapRotation />} />
          <Route path='/server' element={<ServerStatus />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/news' element={<NewsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
