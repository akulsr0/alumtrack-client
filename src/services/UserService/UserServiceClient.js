import Cookies from 'universal-cookie';
import CookiesConstants from '../../constants/Cookies';
import Navigation from '../../navigation';

const cookies = new Cookies();

const getUserToken = () => {
  const token = cookies.get(CookiesConstants.USER_TOKEN);
  return token;
};

const setUserToken = (token) => {
  cookies.set(CookiesConstants.USER_TOKEN, token);
};

const logoutUser = () => {
  cookies.remove(CookiesConstants.USER_TOKEN);
  Navigation.goToLogin();
};

const UserServiceClient = {
  getUserToken,
  setUserToken,
  logoutUser,
};
export default UserServiceClient;
