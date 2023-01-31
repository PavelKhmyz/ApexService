import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Fotter';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { MapRotation } from './components/mapRotation/MapRotation';
import { ServerStatus } from './components/serverStatus/ServerStatus';
import { SignIn } from './components/signIn/SignIn';
import { NewsPage } from './components/news/NewsPage';
import { UserProfile } from './components/userProfile/UserProfile';
import { ContentElement } from './components/userProfile/components/ContentElement';
import { SettingsElement } from './components/userProfile/components/SettingsElement';
import { useAppSelector } from './redux/hooks/hook';
import { RequerAuth } from './private/RequerAuth';

function App() {
  const themeValue = useAppSelector((state) => state.user.theme);

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
