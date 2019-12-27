import styled from "styled-components";

const FilterWrapper = styled.form`
  display: flex;
  max-width: 320px;
  padding: ${props => props.theme.sizes.spacing.l1};
  justify-content: space-between;
  & input[type="text"] {
    max-width: 165px;
    min-height: 40px;
  }
`;

export default FilterWrapper;
