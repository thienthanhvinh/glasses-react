
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path='/sign-up' element={<Sig></Sig nUpPage>}></Route>
    </Routes>
  );
}

export default App;