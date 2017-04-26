import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { fetchImage } from '../../actions/image_actions';
import ImageShowContainer from '../image_show_page/image_show_container';

class UserShowImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(e) {
    this.openModal();
    return this.props.fetchImage(e.currentTarget.value);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  image_selector(userShowImages) {
    return (userShowImages.map(userShowImage => {
      return(
        <li key={userShowImage.id}
          className='user-show-image'
          onClick={this.handleClick}
          value={userShowImage.id}>
          <img src={userShowImage.image_url}/>
          <div className='overlay'/>
        </li>
      );
    }
  ));}

  image_mapper(image_selector){{
    let res = [[]];
    for (var i = image_selector.length-1; i >= 0; i--) {
      if (res[res.length-1].length < 3) {
        res[res.length-1].push(image_selector[i]);
      } else {
        res.push([image_selector[i]]);
      }
    }
    return res.map((row, id) =>{
      return(
        <li key={id}>
          <ul className='user-show-image-row'>
            {row}
          </ul>
        </li>
      );}
    );
  }}

  render() {
    return(
      <div>
        <ul className='user-show-images'>
          {this.image_mapper(
            this.image_selector(
              this.props.userShowImages
            )
          )}
        </ul>

        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel={'image-show'}
          onRequestClose={this.closeModal}
          className='image-show'>
          <ImageShowContainer
            imageShow={this.props.imageShow}
            likes={this.props.likes}/>
        </Modal>
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
    fetchImage: (id) => dispatch(fetchImage(id))
  };
};

const UserShowImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowImage);

export default UserShowImageContainer;
