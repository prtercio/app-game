import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Home from './components/Home';
import GameCreate from './components/gameCreate';

const App = () => {
  let routes = useRoutes([
      {path: "/", element: <Home />},
      {path: "/play/create", element: <GameCreate />},     
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
