import History from './History';
import RouterConstants from '../constants/Router';

const goToLogin = () => {
  History.push(RouterConstants.routes.LOGIN);
};

const goToRegister = () => {
  History.push(RouterConstants.routes.REGISTER);
};

const goToDashboard = () => {
  History.push(RouterConstants.routes.DASHBOARD);
};

const Navigation = {
  goToLogin,
  goToRegister,
  goToDashboard,
};
export default Navigation;
