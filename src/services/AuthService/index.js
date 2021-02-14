import UserService from '../UserService';
import Navigation from '../../navigation';

const checkAuth = (cb) => {
  const token = UserService.Client.getUserToken();
  if (token) {
    UserService.API.getUser(token, (err, data) => {
      if (err) {
        cb(err);
      }
      if (data) {
        cb(null, data);
      }
    });
  } else {
    Navigation.goToLogin();
  }
};

const AuthService = {
  checkAuth,
};
export default AuthService;
