import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../../redux/store";
import userActions from "../../redux/user/actions";

import Login from "../../components/login";

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

  const handleLogin = (username: string, password: string) => {
    dispatch(userActions.signIn("Test token --:)", username));
    history.push("/app");
  };
  return (
    <ThemeProvider theme={theme}>
      <SignInWrapper>
        {token ? null : (
          <Login
            title={t("login")}
            usernamePlaceholder={t("username")}
            passwordPlaceholder={t("password")}
            onLoginClick={handleLogin}
            buttonText={t("login")}
          />
        )}
      </SignInWrapper>
    </ThemeProvider>
  );
};

export default SignIn;
