import React from 'react';

import LoginComponent from '../../components/Auth/Login';
import Navigation from '../../navigation';
import UserService from '../../services/UserService';

import TextUtils from '../../utils/TextUtils';

export default function Login() {
  const goToRegister = () => {
    Navigation.goToRegister();
  };
  const loginUser = (email, password) => {
    if (!TextUtils.isEmail(email)) {
      return window.alert('Invalid Email');
    }
    if (password.length < 6) {
      return window.alert("Password can't be less than 6 characters");
    }
    UserService.API.loginUser({ email, password });
  };
  return (
    <div>
      <LoginComponent onClickRegister={goToRegister} onClickLogin={loginUser} />
    </div>
  );
}
