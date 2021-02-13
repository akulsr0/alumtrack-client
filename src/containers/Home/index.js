import React, { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

import Topbar from '../../components/Topbar';

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Topbar user={user} />
    </div>
  );
}
