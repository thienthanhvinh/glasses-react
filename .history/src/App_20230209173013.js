
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
      <Route path='/sign-in' element={<SignUpPage></SignUpPage>}></Route>
    </Routes>
  );
}

export default App;
