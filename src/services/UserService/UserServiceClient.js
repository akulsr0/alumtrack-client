import Cookies from 'universal-cookie';
import CookiesConstants from '../../constants/Cookies';

const cookies = new Cookies();

const getUserToken = () => {
  const token = cookies.get(CookiesConstants.USER_TOKEN);
  return token;
};

const setUserToken = (token) => {
  cookies.set(CookiesConstants.USER_TOKEN, token);
};

const UserServiceClient = {
  getUserToken,
  setUserToken,
};
export default UserServiceClient;
