import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../../redux/store";
import userActions from "../../redux/user/actions";

import { registerApi, signInApi } from "../../services/users";

import Login from "../../components/login";
import Icon from "../../components/ui-kit/icon";
import Register from "../../components/register";
import message from "../../components/ui-kit/message";
import { Tabs, TabPane } from "../../components/ui-kit/tabs";

import SignInWrapper from "./signIn.style";

interface IProps extends RouteComponentProps {}
const SignIn: React.FC<IProps> = ({ history }) => {
  const { t } = useTranslation();
  const { theme, token } = useSelector((state: AppState) => {
    return { theme: state.AppSetting.theme, token: state.User.token };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      history.push("/app");
    }
  });

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await signInApi({ email: username, password });
      if (response) {
        dispatch(userActions.signIn(response, username));
        history.push("/app");
      }
    } catch (err) {
      message.error(err.message, 5);
    }
  };
  const handleRegister = async (
    name: string,
    username: string,
    password: string
  ) => {
    try {
      const response = await registerApi({ name, password, email: username });
      if (response.email === username) {
        handleLogin(username, password);
      }
    } catch (err) {
      message.error(err.message, 5);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <SignInWrapper>
        {token ? null : (
          <Tabs>
            <TabPane
              tab={
                <span>
                  <Icon type="login" />
                  SignIn
                </span>
              }
              key="1"
            >
              <Login
                title={t("login")}
                usernamePlaceholder={t("email")}
                passwordPlaceholder={t("password")}
                onLoginClick={handleLogin}
                buttonText={t("login")}
              />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="team" />
                  Register
                </span>
              }
              key="2"
            >
              <Register
                title={t("register")}
                namePlaceholder={t("name")}
                usernamePlaceholder={t("email")}
                passwordPlaceholder={t("password")}
                onRegisterClick={handleRegister}
                buttonText={t("register")}
              ></Register>
            </TabPane>
          </Tabs>
        )}
      </SignInWrapper>
    </ThemeProvider>
  );
};

export default SignIn;
