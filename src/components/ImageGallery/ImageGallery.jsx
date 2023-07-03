import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from './../Modal/Modal';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as s from './ImageGallery.styled';

const ImageGallery = ({ data }) => {
  // state = {
  //   showModal: false,
  //   hugeURL: ''
  // }
  const [currentImage, setCurrentImage] = useState('');
  const [modal, setModal] = useState(false);

  // const openModal = (hugeURL) => {
  //     window.addEventListener("keydown", this.closeModalonESC);

  //     this.setState({ showModal: true, hugeURL }, () => {
  //       console.log(this.state);
  //     });
  //   }

  const openModal = hugeURL => {
    window.addEventListener('keydown', closeModalonESC);
    setModal(true);
    setCurrentImage(hugeURL);
    // console.log(hugeURL)
  };

  const closeModalonESC = evt => {
    if (evt.code === 'Escape') {
      setModal(false);
      window.removeEventListener('keydown', closeModalonESC);
    }
  };

  const closeModalonOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      setModal(false);
      window.removeEventListener('keydown', closeModalonESC);
    }
  };

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        setModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const showModal = modal;
  // const { showModal, hugeURL } = this.state;
  // const { data } = this.props;

  return (
    <>
      <s.GalleryList>
        {data.map(image => (
          <ImageGalleryItem
            modalOpen={openModal}
            key={image.id}
            image={image}
            hugeURL={image.largeImageURL}
          />
        ))}
      </s.GalleryList>

      {showModal && (
        <Modal closeModal={closeModalonOverlay} hugeImg={currentImage} />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ImageGallery;
