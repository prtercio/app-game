import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Home from './components/Home';
import GameCreate from './components/gameCreate';
import Inscripcion from './components/participantes/inscripcion';
import '@fontsource/roboto';
import Admin from './components/admin/admin';

const App = () => {
  let routes = useRoutes([
      {path: "/", element: <Home />},
      {path: "/play/create", element: <GameCreate />},     
      {path: "/partipante/inscripcion", element: <Inscripcion />},
      {path: "/admin/admin/:id", element: <Admin />},
  ]);
  return routes;
}

//export default App;
const AppWrapper = () => {
  return (
      <Router>
          <App />
      </Router>
  )
}

export default AppWrapper;
