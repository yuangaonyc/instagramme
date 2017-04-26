import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../../actions/image_actions';

class ImageInteraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      image_id: ''
    };

    this.updateComment = this.updateComment.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateComment(e) {
    this.setState({
      body: e.currentTarget.value,
      image_id: this.props.imageId
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.postComment(this.state).then(
      () => this.setState({body:''})).then(
        () => document.querySelector(".comments li:last-child").scrollIntoView()
      );
  }

  render() {
    return(
      <div className='image-interaction'>
        <div className='heart'/>
        <form onSubmit={this.submitForm}>
          <input
            placeholder='Add a comment...'
            onChange={this.updateComment}
            value={this.state.body}/>
        </form>
        <div className='white-dots'/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({});
};

const mapDispatchToProps = dispatch => {
  return({
    postComment: comment => dispatch(postComment(comment))
  });
};

const ImageInteractionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageInteraction);

export default ImageInteractionContainer;
