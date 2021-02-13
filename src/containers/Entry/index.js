import React, { useContext, useEffect } from 'react';
import Loading from '../../components/Loading';

import EntryStyles from '../../styles/Entry';

import UserService from '../../services/UserService';
import Navigation from '../../navigation';
import { UserContext } from '../../contexts/UserContext';

export default function Entry() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const token = UserService.Client.getUserToken();
    if (token) {
      UserService.API.getUser(token, (err, data) => {
        if (err) {
          console.error(err);
        }
        if (data) {
          setUser(data.user);
          Navigation.goToDashboard();
        }
      });
    } else {
      Navigation.goToLogin();
    }
  }, []);
  return (
    <div style={EntryStyles.entryLoading}>
      <Loading />
    </div>
  );
}
