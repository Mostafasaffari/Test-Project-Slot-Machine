import styled from "styled-components";

const AppBarWrapper = styled.div`
  .appbar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .appbar__header--trigger {
    margin: 0 ${props => props.theme.sizes.spacing.main};
    font-size: ${props => props.theme.sizes.font.l5};
  }
  .appbar__header-right {
    display: flex;
    min-width: 200px;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
  }
`;

export default AppBarWrapper;
