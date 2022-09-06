import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/defaults/Layout';
import Home from './components/homepage/Home';
import ExcusePage from './components/excuse/ExcusePage';
import FactPage from './components/fact/FactPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="excuses" element={<ExcusePage />} />
            <Route path="facts" element={<FactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
