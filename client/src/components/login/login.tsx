import React, { useState } from "react";

import { emailPattern, passwordPattern } from "../../helpers/regexPatterns";

import Input from "../../components/ui-kit/input";
import Button from "../../components/ui-kit/button";
import message from "../../components/ui-kit/message";

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
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      username &&
      password &&
      username.match(emailPattern) &&
      password.match(passwordPattern)
    ) {
      onLoginClick(username, password);
    } else {
      message.error("Please fill out all input!!");
    }
  };
  return (
    <LoginWrapper>
      <div className="login-box">
        <div className="login-box-header">
          <span>{title}</span>
        </div>
        <form className="login-box-body" onSubmit={handleLogin}>
          <Input
            placeholder={usernamePlaceholder}
            onChange={handleChangeFieldLogin("username")}
            required
            pattern={new RegExp(emailPattern).source}
            title="Enter valid email address!"
          />
          <Input.Password
            placeholder={passwordPlaceholder}
            onChange={handleChangeFieldLogin("password")}
            required
            pattern={new RegExp(passwordPattern).source}
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
          <Button htmlType="submit">{buttonText}</Button>
        </form>
      </div>
    </LoginWrapper>
  );
};

export default Login;
