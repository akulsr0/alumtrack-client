import React from 'react';

import RegisterComponent from '../../components/Auth/Register';
import Navigation from '../../navigation';

export default function Register() {
  const goToLogin = () => {
    Navigation.goToLogin();
  };
  return (
    <div>
      <RegisterComponent goToLogin={goToLogin} />
    </div>
  );
}
