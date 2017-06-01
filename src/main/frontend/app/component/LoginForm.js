import React from 'react';

const LoginForm = ({ logIn }) => (
  <form className="navbar-form navbar-right">
    <div className="form-group">
      <input type="text" className="form-control" name="username" placeholder="Username" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" name="password" placeholder="Password" />
    </div>
    <button type="button" className="btn btn-default" onClick={logIn}>Sign In</button>
  </form>
);

export default LoginForm;
