import { Suspense } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routers from './routes';

function App() {
  return <Suspense fallback={<p>loading...</p>}>{useRoutes(routers)}</Suspense>;
}

export default App;
