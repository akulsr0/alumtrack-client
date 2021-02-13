import React, { useEffect } from 'react';
import Loading from '../../components/Loading';

import EntryStyles from '../../styles/Entry';

import UserService from '../../services/UserService';
import Navigation from '../../navigation';

export default function Entry() {
  useEffect(() => {
    const token = UserService.Client.getUserToken();
    if (token) {
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
