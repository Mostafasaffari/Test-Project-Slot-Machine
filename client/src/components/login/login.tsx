import React, { useState } from "react";

import Input from "../../components/ui-kit/input";
import Button from "../../components/ui-kit/button";

import LoginWrapper from "./login.style";

interface IProps {
  title: string;
  usernamePlaceholder: string;
  passwordPlaceholder: string;
  buttonText: string;
  onLoginClick: (username: string, password: string) => void;
}

const Login: React.FC<IProps> = ({
  title,
  usernamePlaceholder,
  passwordPlaceholder,
  buttonText,
  onLoginClick
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFieldLogin = (field: "username" | "password") => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (field) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
    }
  };
  const handleLogin = () => {
    onLoginClick(username, password);
  };
  return (
    <LoginWrapper>
      <div className="login-box">
        <div className="login-box-header">
          <span>{title}</span>
        </div>
        <div className="login-box-body">
          <Input
            placeholder={usernamePlaceholder}
            onChange={handleChangeFieldLogin("username")}
          />
          <Input.Password
            placeholder={passwordPlaceholder}
            onChange={handleChangeFieldLogin("password")}
          />
          <Button onClick={handleLogin}>{buttonText}</Button>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
