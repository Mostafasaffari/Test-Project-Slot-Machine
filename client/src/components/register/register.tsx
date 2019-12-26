import React, { useState } from "react";

import Input from "../../components/ui-kit/input";
import Button from "../../components/ui-kit/button";

import RegisterWrapper from "./register.style";

interface IProps {
  title: string;
  namePlaceholder: string;
  usernamePlaceholder: string;
  passwordPlaceholder: string;
  buttonText: string;
  onRegisterClick: (name: string, username: string, password: string) => void;
}

const Register: React.FC<IProps> = ({
  title,
  namePlaceholder,
  usernamePlaceholder,
  passwordPlaceholder,
  buttonText,
  onRegisterClick
}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFieldRegister = (field: "name" | "username" | "password") => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
  const handleRegister = () => {
    onRegisterClick(name, username, password);
  };
  return (
    <RegisterWrapper>
      <div className="register-box">
        <div className="register-box-header">
          <span>{title}</span>
        </div>
        <div className="register-box-body">
          <Input
            placeholder={namePlaceholder}
            onChange={handleChangeFieldRegister("name")}
          />
          <Input
            placeholder={usernamePlaceholder}
            onChange={handleChangeFieldRegister("username")}
          />
          <Input.Password
            placeholder={passwordPlaceholder}
            onChange={handleChangeFieldRegister("password")}
          />
          <Button onClick={handleRegister}>{buttonText}</Button>
        </div>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
