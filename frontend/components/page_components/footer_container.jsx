import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    return(
      <div className='footer'>
        <div className='footer-links'>
          <p>
            about us
          </p>
          <p>
            support
          </p>
          <p>
            blog
          </p>
          <p>
            press
          </p>
          <p>
            api
          </p>
          <p>
            jobs
          </p>
          <p>
            privacy
          </p>
          <p>
            terms
          </p>
          <p>
            directory
          </p>
          <p>
            language
          </p>
        </div>
        <div className='footer-logo'>
          2017   instagramme
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default FooterContainer;
