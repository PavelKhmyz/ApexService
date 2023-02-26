import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/common/Footer/Fotter';
import { Home } from './components/Home/Home';
import { MapRotation } from './components/MapRotation/MapRotation';
import { ServerStatus } from './components/ServerStatus/ServerStatus';
import { SignIn } from './components/SignIn/SignIn';
import { NewsPage } from './components/NewsPage/NewsPage';
import { UserProfile } from './components/UserProfile/UserProfile';
import { ContentElement } from './components/UserProfile/ContentElement/ContentElement';
import { useAppSelector } from './redux/hooks/hook';
import { RequireAuth } from './private/RequerAuth';
import { refreshRequest } from './axios/authRequests';
import { SettingsElement } from './components/UserProfile/SettingsElement/SettingsElement';
import { Header } from './components/common/Header/Header';

function App() {
  const themeValue = useAppSelector((state) => state.user.theme);
  const auth = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    const token = window.sessionStorage.getItem('refreshToken');

    if (token && !auth) {
      refreshRequest(token);
    }
  }, [auth]);

  const main = document.documentElement;
  main.style.setProperty('--bgColor', themeValue.bgColor);
  main.style.setProperty('--firstColor', themeValue.firstColor);
  main.style.setProperty('--secondColor', themeValue.secondColor);
  main.style.setProperty('--fontColor', themeValue.fontColor);
  main.style.setProperty('--shadow', themeValue.shadow);
  main.style.setProperty('--secondShadow', themeValue.secondShadow);

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
          <Route
            path='/profile'
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          >
            <Route path='user' element={<ContentElement />} />
            <Route path='settings' element={<SettingsElement />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
