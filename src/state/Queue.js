import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext(null);

function Provider({ children }) {
  const state = {};
  const actions = {};
  return <Context.Provider value={[state, actions]}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export default { Provider, Context };
