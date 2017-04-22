import React from 'react';
import { connect } from 'react-redux';

class InteractionMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        interaction
      </div>
    );
  }
}

const mapStateToProps = () => {
  return(
    {}
  );
};

const mapDispatchToProps = () => {
  return(
    {}
  );
};

const InteractionMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InteractionMenu);

export default InteractionMenuContainer;
