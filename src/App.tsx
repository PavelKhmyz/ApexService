import './App.css';
import { Footer } from './components/footer/Fotter';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MapRotation } from './components/mapRotation/MapRotation';
import { ServerStatus } from './components/serverStatus/ServerStatus';
import { SignIn } from './components/signIn/SignIn';
import { useEffect } from 'react';
import { changeTime, getRotation } from './redux/reducer/mapSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks/hook';

function App() {
  const dispatch = useAppDispatch();
  const time = useAppSelector((state) => state.map.time);

  const handleChangeTime = () => {
    dispatch(changeTime());
  };

  useEffect(() => {
    if (time) {
      setTimeout(handleChangeTime, 1000);
    }
    if (time === 0) {
      dispatch(getRotation());
    }
  }, [time]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/maps' element={<MapRotation />} />
          <Route path='/server' element={<ServerStatus />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
