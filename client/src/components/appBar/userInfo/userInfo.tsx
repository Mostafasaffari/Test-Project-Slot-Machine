import React, { useState } from "react";

import Popover from "../../ui-kit/popover";
import Icon from "../../ui-kit/icon";

import UserInfoWrapper, { PopoverWrapper } from "./userInfo.style";

interface IProps {
  signOutUser: () => void;
}
const UserInfo: React.FC<IProps> = ({ signOutUser }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleVisible = () => {
    setShowPopover(!showPopover);
  };
  const content = (
    <UserInfoWrapper onClick={signOutUser}>
      <span>Sign out</span>
    </UserInfoWrapper>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      visible={showPopover}
      onVisibleChange={handleVisible}
      arrowPointAtCenter={true}
      placement="bottomLeft"
    >
      <PopoverWrapper>
        <Icon type="user" />
      </PopoverWrapper>
    </Popover>
  );
};

export default UserInfo;
