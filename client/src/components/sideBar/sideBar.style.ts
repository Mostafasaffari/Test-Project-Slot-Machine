import styled from "styled-components";

const SideBarWrapper = styled.div`
  .sidebar {
    @media only screen and (max-width: 767px) {
      width: 240px !important;
      flex: 0 0 240px !important;
      transition: all 1s;
    }
    &.ant-layout-sider-collapsed,
    &.sidebar__menu {
      @media only screen and (max-width: 767px) {
        display: none !important;
      }
    }
    .sidebar__logo {
      font-size: ${props => props.theme.sizes.font.l5};
      color: ${props => props.theme.colors.font.light};
      height: 32px;
      background: ${props => props.theme.colors.background.hoverLight};
      margin: ${props => props.theme.sizes.spacing.l3};
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      letter-spacing: 4px;
    }
    .sidebar__menu {
      background: ${props => props.theme.colors.background.sideBar};
      border: 0;
      .ant-menu-item-selected {
        background: ${props => props.theme.colors.background.hoverLight};
      }
      .sidebar__menu-items {
        &:hover {
          background: ${props => props.theme.colors.background.hoverLight};
        }
        .sidebar__menu-items--i,
        .sidebar__menu-items--span {
          color: ${props => props.theme.colors.font.light};
        }
      }
    }
  }
`;

export default SideBarWrapper;
