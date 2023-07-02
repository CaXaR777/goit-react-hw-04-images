import * as s from './Modal.styled'
import PropTypes from 'prop-types';


export const Modal = ({ hugeImg, closeModal,  }) => {
//     const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)
// console.log(hugeImg)
  return (
    <s.Overlay overlay='true' onClick={closeModal} >
      <s.Modal >
        <s.ModalImg src={hugeImg} alt="" />
      </s.Modal>
    </s.Overlay>
  )
}

Modal.propTypes = {
  hugeImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
} 