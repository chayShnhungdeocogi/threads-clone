import { Routes, Route } from 'react-router-dom';
import './App.css';
import LayoutDefault from './layouts/LayoutDefault';
import LayoutLogSign from './layouts/LayoutLogSign';
import Home from './pages/Home';
import Search from './pages/Search';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import PrivateRoutes from './components/PrivateRoutes';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route element={<PrivateRoutes />}>
            <Route path='activity' element={<Activity />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Route>
        <Route element={<LayoutLogSign />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='logout' element={<Logout />}/>
      </Routes>
    </>
  );
}

export default App;