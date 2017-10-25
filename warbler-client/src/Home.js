import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        Home
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    userId: state.userId
  }
}

export default connect(mapStateToProps)(Home);
