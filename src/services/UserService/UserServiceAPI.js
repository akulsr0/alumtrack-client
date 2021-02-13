import { get } from 'lodash';

import UserServiceClient from './UserServiceClient';
import APIService from '../APIService';
import APIConstants from '../../constants/API/index';

const loginUser = ({ email, password }) => {
  APIService.request(
    {
      url: `${APIConstants.API_HOST}${APIConstants.AuthConstants.auth}${APIConstants.AuthConstants.login}`,
      method: APIConstants.APIMethods.POST,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email,
        password,
      }),
    },
    (err, data) => {
      if (err) {
        return console.error(err);
      }
      if (data) {
        if (!data.success) {
          return window.alert(data.message);
        }
        const token = get(data, 'token');
        UserServiceClient.setUserToken(token);
      }
    }
  );
};

const UserServiceAPI = {
  loginUser,
};
export default UserServiceAPI;
