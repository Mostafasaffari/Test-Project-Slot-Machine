import React from "react";
import SpinnerWrapper from "./spinner.style";

interface IProps {
  positionReel: number;
  randomPosition: number;
}
const Spinner: React.FC<IProps> = ({
  positionReel,
  randomPosition
}) => {
  return (
    <SpinnerWrapper>
      <div
        className={[
          "spinner__spin--icon",
          positionReel === -1 ? "spinner__spin--question" : ""
        ].join(" ")}
        style={{ backgroundPositionY: `${randomPosition || positionReel}px` }}
      ></div>
    </SpinnerWrapper>
  );
};

export default Spinner;
