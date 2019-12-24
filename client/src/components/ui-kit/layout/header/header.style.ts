import styled from "styled-components";

import Layout from "../";

const { Header } = Layout;

const HeaderStyle = (ComponentName: typeof Header) => styled(ComponentName)`
  background: ${props => props.theme.colors.background.appBar};
  padding: 0;
`;

export default HeaderStyle;
