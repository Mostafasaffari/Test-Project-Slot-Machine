import styled from "styled-components";

import Layout from "../";

const { Content } = Layout;

const ContentStyle = (ComponentName: typeof Content) => styled(ComponentName)`
  background: ${props => props.theme.colors.background.contentLayout};
  padding: 30px;
  height: calc(100vh - 125px);
`;

export default ContentStyle;
