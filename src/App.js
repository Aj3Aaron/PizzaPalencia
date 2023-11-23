
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import PalenciaPizza from './pages/palenciaPizza';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/PalenciaPizza' element={<PalenciaPizza />} />
      </Routes>
    </Router>
  );
}

export default App;
