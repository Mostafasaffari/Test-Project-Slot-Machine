import styled from "styled-components";

import Layout from "../";

const { Sider } = Layout;

const SiderStyle = (ComponentName: typeof Sider) => styled(ComponentName)`
  background: ${props => props.theme.colors.background.sideBar};
  height: 100%;
`;

export default SiderStyle;
