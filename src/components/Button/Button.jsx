import * as s from './Button.styled'
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <s.Button  onClick={loadMore}>Load more</s.Button>
  )
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired
} 