import React, { useContext, useEffect } from 'react';
import { get } from 'lodash';
import Loading from '../../components/Loading';

import EntryStyles from '../../styles/Entry';

import { UserContext } from '../../contexts/UserContext';
import AuthService from '../../services/AuthService';
import Navigation from '../../navigation';

export default function Entry() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    AuthService.checkAuth((err, data) => {
      if (data) {
        setUser(get(data, 'user'));
        Navigation.goToDashboard();
      }
    });
  }, []);
  return (
    <div style={EntryStyles.entryLoading}>
      <Loading />
    </div>
  );
}
