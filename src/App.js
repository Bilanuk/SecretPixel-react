import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import AppPage from './pages/AppPage'
import HomePage from './pages/HomePage'
import ProtectedRoute from './features/ProtectedRoute'
import SettingsPage from "./pages/SettingsPage";
import {PageContainer} from "./styled/styles";
import styled from 'styled-components'
import './App.css'
import {useSelector} from "react-redux";

const CubesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeaderPlaceholder = styled.div`
  height: 55px;
  width: 100vw;
`;

function App() {
    return (
        <Router>
            <Header/>
            <HeaderPlaceholder/>
                <PageContainer>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/register' element={<RegisterPage/>}/>
                        <Route element={<ProtectedRoute/>}>
                            <Route path='/app' element={<AppPage/>}/>
                            <Route path='/user-profile' element={<ProfilePage/>}/>
                        </Route>
                        <Route path='/settings' element={<SettingsPage/>}/>
                    </Routes>
                </PageContainer>
        </Router>
    )
}

export default App
