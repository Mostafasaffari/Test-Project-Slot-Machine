import styled from "styled-components";

import Layout from "../";

const { Footer } = Layout;

const FooterStyle = (ComponentName: typeof Footer) => styled(ComponentName)`
  background: ${props => props.theme.colors.background.footer};
  text-align: center;
  padding: 20px;
`;

export default FooterStyle;
