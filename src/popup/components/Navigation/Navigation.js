import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

import homeIcon from './assets/home.svg';
import expandMoreIcon from './assets/expandMore.svg';
import expandLessIcon from './assets/expandLess.svg';
import helpIcon from './assets/help.svg';

function Navigation({ className, goHome, openHelp }) {
  return (
    <nav className={`${className} Navigation`}>
      <button onClick={goHome} type="button" className="Navigation__link Navigation__home">
        <img src={homeIcon} alt="Home" />
      </button>
      <button onClick={() => {}} type="button" className="Navigation__link Navigation__expand-queue">
        <img src={expandMoreIcon || expandLessIcon} alt="Expand" />
      </button>
      <button onClick={openHelp} type="button" className="Navigation__link Navigation__help">
        <img src={helpIcon} alt="Help" />
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
  goHome: PropTypes.func.isRequired,
  openHelp: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  className: '',
};

export default Navigation;
