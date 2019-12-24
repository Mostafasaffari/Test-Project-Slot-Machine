import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { INavigationSidebar } from "../../../interfaces/dataListInterfaces";

import { AppState } from "../../../redux/store";
import userActions from "../../../redux/user/actions";
import appSettingActions from "../../../redux/appSetting/actions";

import AppBar from "../../../components/appBar";
import SideBar from "../../../components/sideBar";
import Layout from "../../../components/ui-kit/layout";
import Content from "../../../components/ui-kit/layout/content";
import Footer from "../../../components/ui-kit/layout/footer";

import AppRouter from "../RestrictedRouter";

import AppWrapper from "./layout.style";

interface IProps extends RouteComponentProps {}
const App: React.FC<IProps> = ({ match, history }) => {
  const [collapseSideBar, setCollapseSideBar] = useState(false);
  const { t } = useTranslation();
  const theme = useSelector((state: AppState) => state.AppSetting.theme);
  const dispatch = useDispatch();
  const { url } = match;

  const handleChangeTheme = (theme: DefaultTheme) => {
    dispatch(appSettingActions.changeTheme(theme));
  };
  const handleToggleSideBar = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setCollapseSideBar(!collapseSideBar);
  };
  const handleSignOutUser = () => {
    dispatch(userActions.signOut());
    history.push("/");
  };

  const navigationSidebarData: INavigationSidebar[] = [
    {
      id: 1,
      title: t("sidebarMenu.todoList"),
      link: "todoList",
      icon: "ordered-list"
    },
    {
      id: 2,
      title: t("sidebarMenu.setting"),
      link: "setting",
      icon: "setting"
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SideBar
          url={url}
          title={t("dashboard")}
          collapsed={collapseSideBar}
          navData={navigationSidebarData}
        />
        <Layout>
          <AppBar
            collapsed={collapseSideBar}
            toggle={handleToggleSideBar}
            onChangeTheme={handleChangeTheme}
            signOutUser={handleSignOutUser}
          />
          <Content>
            <AppWrapper data-test="wrapper">
              <AppRouter url={url} />
            </AppWrapper>
          </Content>
          <Footer>{t("footer.copy")}</Footer>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
