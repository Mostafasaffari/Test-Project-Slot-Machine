import React, { useState } from "react";
import { Link } from "react-router-dom";

import { INavigationSidebar } from "../../interfaces/dataListInterfaces";

import Menu from "../ui-kit/menu";
import Icon from "../ui-kit/icon";
import Sider from "../ui-kit/layout/sider";
import MenuItem from "../ui-kit/menu/item";

import SideBarWrapper from "./sideBar.style";

interface IPorps {
  title: string;
  url: string;
  collapsed: boolean;
  navData: INavigationSidebar[];
}
const SideBar: React.FC<IPorps> = ({ title, collapsed, url, navData }) => {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState<string[]>([]);

  const handleClickLogo = () => {
    setSelectedMenuKeys([]);
  };
  const handleClickMenu = ({ key }: { key: string }) =>
    setSelectedMenuKeys([key]);

  return (
    <SideBarWrapper>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sidebar"
      >
        <Link to={`${url}`}>
          <div className="sidebar__logo" onClick={handleClickLogo}>
            {!collapsed ? title : <Icon type="appstore" />}
          </div>
        </Link>
        <Menu
          mode="inline"
          className="sidebar__menu"
          onSelect={handleClickMenu}
          selectedKeys={selectedMenuKeys}
        >
          {navData &&
            navData.length > 0 &&
            navData.map(item => (
              <MenuItem key={item.id} className="sidebar__menu-items">
                <Link to={`${url}/${item.link}`}>
                  <Icon type={item.icon} className="sidebar__menu-items--i" />
                  <span className="sidebar__menu-items--span">
                    {item.title}
                  </span>
                </Link>
              </MenuItem>
            ))}
        </Menu>
      </Sider>
    </SideBarWrapper>
  );
};

export default SideBar;
