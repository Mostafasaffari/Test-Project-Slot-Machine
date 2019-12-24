import styled from "styled-components";

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 50px;
  justify-content: space-around;
  span {
    font-size: ${props => props.theme.sizes.spacing.l1};
    cursor: pointer;
  }
`;

export const PopoverWrapper = styled.div`
  display: flex;
  cursor: pointer;

  i {
    font-size: ${props => props.theme.sizes.font.xl2};
  }
`;

export default UserInfoWrapper;
