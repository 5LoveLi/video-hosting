import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Authorization } from './pages/authorization/Authorization';
import { Registration } from './pages/registration/Registration';
import { Private } from './routes/Private';
import 'antd/dist/reset.css';

export function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="*" element={<Private />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

