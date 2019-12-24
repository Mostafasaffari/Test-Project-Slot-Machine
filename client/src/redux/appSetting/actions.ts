import { CHANGE_THEME, IAppSettingActions } from "./types";

const actions: IAppSettingActions = {
  changeTheme: theme => ({
    type: CHANGE_THEME,
    theme
  })
};

export default actions;
