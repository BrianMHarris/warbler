import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <Link className="navbar-brand" to={`/home/${props.userId}`}>Wbl</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.username}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/edit/${props.userId}`}>Edit Profile</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to='/login'>Log Out</Link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
)

const mapStateToProps = function(state) {
  return {
    username: state.username,
    userId: state.userId
  }
}

export default connect(mapStateToProps)(Navigation);
