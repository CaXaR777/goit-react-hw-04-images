import styled from 'styled-components';

export const SearchBar = styled.header
`    background-color: rgba(255, 255, 255, 0.908);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;`
  
  
    export const SearchForm = styled.form
 `   display: flex;
    margin: auto;
    max-width: 700px;
    padding: 10px;
    width: 100%;
    opacity: 0.9;`
  

    export const SearchInput = styled.input
    `border: 1px solid black;
    border-radius: 4px;
    flex: 1;
    margin-left: 10px;
    font-size: 16px;
    padding: 10px;`
  
  
    export const SearchButton = styled.button
  `  background-color: rgb(99, 149, 241, 0.6);
    border: none;
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.908);
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;`
  
  
//   export const Arrow = styled.icon
//   `  fill: #4CAF50;`
  