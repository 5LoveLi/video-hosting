import { useEffect } from 'react';
import { Private } from './routes/Private';
import 'antd/dist/reset.css';
import { ApiClient } from './api/apiClient';

function App() {
  // const getDefaultRequest = () => {
  //   const res = ApiClient.get('/testroute');
  //   console.log(res);
  // }
  // useEffect(() => {
  //   getDefaultRequest();
  // })
  return (
    <div>
      <Private />
    </div>
  );
}

export default App;
