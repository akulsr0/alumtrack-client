import PropTypes from 'prop-types';

import { UserContextProvider } from './UserContext';

const AppContext = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppContext;
