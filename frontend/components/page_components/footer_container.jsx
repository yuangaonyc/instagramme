import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    return(
      <div className='footer'>
        <div className='footer-links'>
          <p>
            <a href="http://yuangaonyc.com">about me</a>
          </p>
          <p>
            <a href="http://github.com/yuangaonyc">github</a>
          </p>
          <p>
            <a href="http://linkedin.com/in/yuangaonyc">linkedin</a>
          </p>
          <p>
            <a href="https://angel.co/yuan-gao-ms">angellist</a>
          </p>
          <p>
            <a href="https://docs.google.com/document/d/1coKV6vyqGVY1xRyAE3SqA6aeBAsX4m4_tjYc512v31A/edit?usp=sharing">resume</a>
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
