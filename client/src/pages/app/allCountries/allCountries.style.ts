import styled from "styled-components";

const AllCountriesWrapper = styled.div`
  padding: ${props => props.theme.sizes.spacing.xl1};
  width: 100%;
  background: ${props => props.theme.colors.background.box};
  border-radius: ${props => props.theme.borderRadius.box};
`;

export default AllCountriesWrapper;
