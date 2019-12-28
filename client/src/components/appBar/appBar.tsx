import React from "react";
import { DefaultTheme } from "styled-components";

import Icon from "../ui-kit/icon";
import UserInfo from "./userInfo";
import ChangeTheme from "../changeTheme";
import Header from "../ui-kit/layout/header";

import AppBarWrapper from "./appBar.style";

interface IProps {
  toggle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  collapsed: boolean;
  onChangeTheme: (theme: DefaultTheme) => void;
  signOutUser: () => void;
  coins: number;
}
const AppBar: React.FC<IProps> = ({
  toggle,
  collapsed,
  onChangeTheme,
  signOutUser,
  coins
}) => {
  return (
    <AppBarWrapper>
      <Header className="appbar__header">
        <Icon
          className="appbar__header--trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
        />
        <div className="appbar__header-right">
          <ChangeTheme onChangeTheme={onChangeTheme} />
          <div className="appbar__header-right--coins">
            coins: {coins}
          </div>
          <UserInfo signOutUser={signOutUser} />
        </div>
      </Header>
    </AppBarWrapper>
  );
};

export default AppBar;
