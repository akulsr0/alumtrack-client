import AppRoute from './routes';
import { Router } from 'react-router-dom';
import history from './navigation/History';

function App() {
  return (
    <Router history={history}>
      <AppRoute />
    </Router>
  );
}

export default App;
