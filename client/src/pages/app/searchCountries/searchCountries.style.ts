import styled from "styled-components";

const SearchCountriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.background.box};
  border-radius: ${props => props.theme.borderRadius.box};
  width: 100%;
  min-height: 300px;
  padding: ${props => props.theme.sizes.spacing.l5};
  & .searchcountries__header {
    & h5 {
      font-size: ${props => props.theme.sizes.font.l3};
    }
  }
`;

export default SearchCountriesWrapper;
