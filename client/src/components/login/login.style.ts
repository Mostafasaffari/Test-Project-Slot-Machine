import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  & .login-box {
    width: 350px;
    &-header {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: ${props => props.theme.sizes.spacing.main};
      background: ${props => props.theme.colors.background.firstGradient};
      border-radius: ${props => props.theme.borderRadius.main}
        ${props => props.theme.borderRadius.main} 0 0;
      & span {
        color: ${props => props.theme.colors.font.light};
        font-size: ${props => props.theme.sizes.font.xl4};
      }
    }
    &-body {
      display: flex;
      flex-direction: column;
      min-height: 150px;
      justify-content: space-between;
      align-items: center;
      width: 350px;
      padding: ${props => props.theme.sizes.spacing.main};
      border: 1px solid ${props => props.theme.colors.border.main};
    }
  }
`;

export default LoginWrapper;
