import styled from "styled-components";
import { Button } from "antd";

const ButtonStyle = (ComponentName: typeof Button) => styled(ComponentName)`
  background: ${props => props.theme.colors.button.gradientBackgroud};
  color: ${props => props.theme.colors.font.light};
  font-size: ${props => props.theme.sizes.font.l3};
  font-weight: bold;
  min-width: 120px;
  min-height: 40px;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.font.secound};
    background: ${props => props.theme.colors.button.hoverBackground};
    border: 1px solid ${props => props.theme.colors.border.secound};
  }
`;

export default ButtonStyle;
