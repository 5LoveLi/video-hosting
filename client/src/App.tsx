import { Private } from './routes/Private';
import 'antd/dist/reset.css';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div>
      <Header/>
      <Private />
    </div>
  );
}

export default App;
