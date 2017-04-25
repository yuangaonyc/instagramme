import React from 'react';
import { connect } from 'react-redux';
import { fetchImage } from '../../actions/image_actions';
import Modal from 'react-modal';
import timeParser from '../../util/time_difference';

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

  render() {
    const image_selector = this.props.userShowImages.map(
      userShowImage => {
        return(
          <li key={userShowImage.id}
            className='user-show-image'
            onClick={this.handleClick}
            value={userShowImage.id}>
            <img src={userShowImage.image_url}/>
          </li>
        );
      }
    );

    const image_mapper = (image_selector) => {
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
    };

    return(
      <div>
        <ul className='user-show-images'>
          {image_mapper(image_selector)}
        </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel={'image-show'}
          onRequestClose={this.closeModal}
          className='image-show-menu'>
          <img src={this.props.imageShow.image_url}
            className='image-show-image'/>
          <div className='image-show-info'>
            <div className='image-show-info-header'>
              <div>
                <img src={this.props.imageShow.author_profile_image_url}/>
                <p>{this.props.imageShow.author_username}</p>
              </div>
              <button>Follow</button>
            </div>

            <div className='image-show-info-basic'>
              <p>Likes</p>
              <p>{timeParser(this.props.imageShow.created_at)}</p>
            </div>

            <div>
              Comments
            </div>

            <div>
              Interaction
            </div>

          </div>
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
