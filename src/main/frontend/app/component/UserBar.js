import React from 'react';

const UserBar = ({ userName, logOut }) => (
  <ul className="nav navbar-nav navbar-right">
    <li className="dropdown">
      <a
        href="#"
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {userName}
        <span className="caret" />
      </a>
      <ul className="dropdown-menu">
        <li><a href="#" onClick={logOut}>Log Out</a></li>
      </ul>
    </li>
  </ul>
);

export default UserBar;
