import History from './History';
import RouterConstants from '../constants/Router';

const goToLogin = () => {
  History.push(RouterConstants.routes.LOGIN);
};

const goToRegister = () => {
  History.push(RouterConstants.routes.REGISTER);
};

const Navigation = {
  goToLogin,
  goToRegister,
};
export default Navigation;
