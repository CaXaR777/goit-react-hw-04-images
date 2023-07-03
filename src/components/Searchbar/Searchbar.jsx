import * as s from './Searchbar.styled';
import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';

// export const Searchbar = () => {
// return (<header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>)
// };

export const Searchbar = ({ onSubmit }) => {
  return (
    <s.SearchBar>
      <s.SearchForm onSubmit={onSubmit}>
        <s.SearchButton type="submit">
          <AiOutlineArrowRight size={20} />
          <span className="button-label">Search</span>
        </s.SearchButton>
        <s.SearchInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </s.SearchForm>
    </s.SearchBar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
