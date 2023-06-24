import * as S from './ImageGalleryItem.styled'
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, modalOpen }) => {
  // console.log(image.largeImageURL)
  return (
    
    <S.GalleryItm onClick={() => modalOpen(image.largeImageURL)}  huge={image.largeImageURL} id='item' >
      <img  height='200' width='300'  src={image.webformatURL}  alt="" />
    </S.GalleryItm>
  )
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  modalOpen: PropTypes.func.isRequired
} 