import React from "react";
import { ThemeName, DefaultTheme } from "styled-components";

import Button from "../ui-kit/button/button";

import { MainTheme, SpecialTheme } from "../../style/themes";

import ChangeThemeWrapper from "./changeTheme.style";
interface IProps {
  onChangeTheme: (theme: DefaultTheme) => void;
}

const ChangeTheme: React.FC<IProps> = ({ onChangeTheme }) => {
  const handleChangeTheme = (themeName: ThemeName) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    switch (themeName) {
      case "main":
        onChangeTheme(MainTheme);
        break;
      case "special":
        onChangeTheme(SpecialTheme);
        break;
      default:
        onChangeTheme(MainTheme);
        break;
    }
  };
  return (
    <ChangeThemeWrapper>
      <Button
        onClick={handleChangeTheme("main")}
        style={{ background: MainTheme.ownColorTheme }}
      ></Button>
      <Button
        onClick={handleChangeTheme("special")}
        style={{ background: SpecialTheme.ownColorTheme }}
      ></Button>
    </ChangeThemeWrapper>
  );
};

export default ChangeTheme;
