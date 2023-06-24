import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Modal } from "./../Modal/Modal"
import { Component } from "react"
import PropTypes from 'prop-types';
import * as s from './ImageGallery.styled'


export class ImageGallery extends Component {

  state = {
    showModal: false,
    hugeURL: ''
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
  }


//   openModal = (e) => {
//     window.addEventListener("keydown", this.closeModalonESC);
//     this.setState({hugeURL: e.currentTarget.getAttribute('huge'), showModal: true})
//    console.log(this.state)
//   }


// openModal = (e) => {
//     window.addEventListener("keydown", this.closeModalonESC);
//     const hugeURL = e.currentTarget.getAttribute('huge');
  
//     this.setState({ hugeURL: hugeURL ,showModal: true }, () => {
//       console.log(this.state);
//     //   console.log(hugeURL); // Можно использовать hugeURL здесь
//     });
//   }


  

// openModal = (e) => {
//     window.addEventListener("keydown", this.closeModalonESC);
//     const objectId = e.currentTarget.getAttribute('id'); // Получаем идентификатор объекта
//     const object = this.props.data.find(item => item.id.toString() === objectId);
//     const hugeURL = object ? object.largeImageURL : '';
  
//     this.setState({ hugeURL, showModal: true }, () => {
//       console.log(hugeURL, objectId, object); // Проверяем значение hugeURL в консоли
//     });
//   }

// openModal = (objectId) => {
//     window.addEventListener("keydown", this.closeModalonESC);
//     const object = this.props.data.find(item => item.id.toString() === objectId);
//     const hugeURL = object ? object.largeImageURL : '';
  
//     this.setState({ hugeURL, showModal: true }, () => {
//       console.log(hugeURL); // Проверяем значение hugeURL в консоли
//     });
//   }



openModal = (hugeURL) => {
    window.addEventListener("keydown", this.closeModalonESC);
    
    this.setState({ showModal: true, hugeURL }, () => {
      console.log(this.state);
      console.log(hugeURL); // Можно использовать hugeURL здесь
    });
  }
  
  
  
  

  closeModalonESC = (evt) => {
    if (evt.code === 'Escape') {
      this.setState({ showModal: false });
      window.removeEventListener("keydown", this.closeModalonESC)
    }
  }

  closeModalonOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.setState({ showModal: false });
      window.removeEventListener("keydown", this.closeModalonESC)
    }
  }

  render() {
    const { showModal, hugeURL } = this.state;
    const { data } = this.props;
  
    return (
      <>
        <s.GalleryList>
          {data.map((image) => (
            <ImageGalleryItem
              modalOpen={this.openModal}
              key={image.id}
              image={image}
              hugeURL={hugeURL}
            />
          ))}
        </s.GalleryList>
  
        {showModal && <Modal closeModal={this.closeModalonOverlay} hugeImg={hugeURL} />}
      </>
    );
  }
}  
