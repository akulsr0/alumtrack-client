import AppRoute from './routes';
import { Router } from 'react-router-dom';
import history from './navigation/History';

import AppContext from './contexts';

function App() {
  return (
    <AppContext>
      <Router history={history}>
        <AppRoute />
      </Router>
    </AppContext>
  );
}

export default App;
