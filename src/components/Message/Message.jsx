import * as s from './Message.styled'
import PropTypes from 'prop-types';
import { IoLogoTableau } from "react-icons/io5";


export const Message = ({ text }) => {
  return (
    <s.Massege >
      <IoLogoTableau  size={25} />
      <s.Text>{text}</s.Text>
      <IoLogoTableau  size={25}/>
    </s.Massege>
  )
}

Message.propTypes = {
  text: PropTypes.string
} 