
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
      <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
      <Route path='/' element></Route>
    </Routes>
  );
}

export default App;
