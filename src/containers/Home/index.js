import React, { useContext, useEffect } from 'react';
import { isEmpty, get } from 'lodash';

import { UserContext } from '../../contexts/UserContext';

import Topbar from '../../components/Topbar';
import AuthService from '../../services/AuthService';

export default function Home() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (isEmpty(user)) {
      AuthService.checkAuth((err, data) => {
        if (data) {
          setUser(get(data, 'user'));
        }
      });
    }
  }, []);

  return (
    <div>
      <Topbar user={user} />
    </div>
  );
}
