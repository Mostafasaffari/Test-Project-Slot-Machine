import React, { useState } from "react";

import Input from "../../components/ui-kit/input";
import Button from "../../components/ui-kit/button";
import message from "../../components/ui-kit/message";

import RegisterWrapper from "./register.style";

interface IProps {
  title: string;
  namePlaceholder: string;
  usernamePlaceholder: string;
  passwordPlaceholder: string;
  usernamePattern: RegExp;
  passwordPattern: RegExp;
  buttonText: string;
  onRegisterClick: (name: string, username: string, password: string) => void;
}

const Register: React.FC<IProps> = ({
  title,
  namePlaceholder,
  usernamePlaceholder,
  passwordPlaceholder,
  buttonText,
  onRegisterClick,
  usernamePattern,
  passwordPattern
}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFieldRegister = (
    field: "name" | "username" | "password"
  ) => (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (field) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
    }
  };
  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      username &&
      password &&
      name &&
      username.match(usernamePattern) &&
      password.match(passwordPattern)
    ) {
      onRegisterClick(name, username, password);
    } else {
      message.error("Please fill out all input!!");
    }
  };
  return (
    <RegisterWrapper>
      <div className="register-box">
        <div className="register-box-header">
          <span>{title}</span>
        </div>
        <form className="register-box-body" onSubmit={handleRegister}>
          <Input
            placeholder={namePlaceholder}
            onChange={handleChangeFieldRegister("name")}
            required
            title="Enter name or fullname"
          />
          <Input
            placeholder={usernamePlaceholder}
            onChange={handleChangeFieldRegister("username")}
            required
            pattern={new RegExp(usernamePattern).source}
            title="Enter valid email address!"
          />
          <Input.Password
            placeholder={passwordPlaceholder}
            onChange={handleChangeFieldRegister("password")}
            required
            pattern={new RegExp(passwordPattern).source}
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
          <Button htmlType="submit">{buttonText}</Button>
        </form>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
