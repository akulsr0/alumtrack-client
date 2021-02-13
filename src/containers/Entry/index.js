import React from 'react';
import Loading from '../../components/Loading';

import EntryStyles from '../../styles/Entry';

export default function Entry() {
  return (
    <div style={EntryStyles.entryLoading}>
      <Loading />
    </div>
  );
}
