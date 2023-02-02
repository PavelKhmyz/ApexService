import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Fotter';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { MapRotation } from './components/mapRotation/MapRotation';
import { ServerStatus } from './components/serverStatus/ServerStatus';
import { SignIn } from './components/signIn/SignIn';
import { NewsPage } from './components/news/NewsPage';
import { UserProfile } from './components/userProfile/UserProfile';
import { ContentElement } from './components/userProfile/components/content/ContentElement';
import { useAppDispatch, useAppSelector } from './redux/hooks/hook';
import { RequerAuth } from './private/RequerAuth';
import { requests } from './axios/requests';
import { addPlayerData } from './redux/reducer/userSlice';
import { addTokens } from './redux/reducer/authSlice';
import { SettingsElement } from './components/userProfile/components/settings/SettingsElement';

function App() {
  const themeValue = useAppSelector((state) => state.user.theme);
  const auth = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();

  const refresh = async (refToken: string) => {
    const response = await requests().refreshToken(refToken);
    window.sessionStorage.setItem('refreshToken', response.data.refreshToken);
    const tokens = {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    };
    dispatch(addPlayerData(response.data.user.userAccounts));
    dispatch(addTokens(tokens));
    console.log(response); // TODO: after refresh store is empty, add email and other data to store after refresh
  };

  useEffect(() => {
    const token = window.sessionStorage.getItem('refreshToken');

    if (token && !auth) {
      refresh(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const main = document.documentElement;
  main.style.setProperty('--bgColor', themeValue.bgColor);
  main.style.setProperty('--firstColor', themeValue.firstColor);
  main.style.setProperty('--secondColor', themeValue.secondColor);
  main.style.setProperty('--fontColor', themeValue.fontColor);
  main.style.setProperty('--shadow', themeValue.shadow);

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
              <RequerAuth>
                <UserProfile />
              </RequerAuth>
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
