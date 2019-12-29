import React from "react";
import SpinnerWrapper from "./spinner.style";

interface IProps {
  intervalSpin: number;
  positionReel: number;
  randomPosition: number;
}
const Spinner: React.FC<IProps> = ({
  intervalSpin,
  positionReel,
  randomPosition
}) => {
  return (
    <SpinnerWrapper>
      <div
        className={[
          "spinner__spin--icon",
          intervalSpin === 0 && positionReel === -1
            ? "spinner__spin--question"
            : ""
        ].join(" ")}
        style={{ backgroundPositionY: `${randomPosition || positionReel}px` }}
      ></div>
    </SpinnerWrapper>
  );
};

export default Spinner;
