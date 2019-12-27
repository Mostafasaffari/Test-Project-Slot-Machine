import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../../components/ui-kit/button";

import SelotMachineWrapper from "./slotMachine.style";

const SlotMachine: React.FC = () => {
  const [position, setPosition] = useState<number>(0);
  const [intervalSpin, setIntervalSpin] = useState<number>(0);
  const { t } = useTranslation();

  const setStartPosition = () => {
    if (intervalSpin) {
      clearInterval(intervalSpin);
      setIntervalSpin(0);
      return;
    }

    const inter = setInterval(() => {
      const randomPosition = Math.floor(Math.random() * 9) * 64 * 2000;
      setPosition(randomPosition);
    }, 100);
    setIntervalSpin(inter);
  };
  return (
    <SelotMachineWrapper>
      <div className="slotmachine__header">
        <Button onClick={() => setStartPosition()}>
          {t("slotMachine.spin")}
        </Button>
      </div>
      <div className="slotmachine__spin">
        <div
          className={[
            "slotmachine__spin--icon",
            intervalSpin === 0 ? "slotmachine__spin--question" : ""
          ].join(" ")}
          style={{ backgroundPositionY: `${position}px` }}
        ></div>
        <div
          className={[
            "slotmachine__spin--icon",
            intervalSpin === 0 ? "slotmachine__spin--question" : ""
          ].join(" ")}
          style={{ backgroundPositionY: `${position}px` }}
        ></div>
        <div
          className={[
            "slotmachine__spin--icon",
            intervalSpin === 0 ? "slotmachine__spin--question" : ""
          ].join(" ")}
          style={{ backgroundPositionY: `${position}px` }}
        ></div>
      </div>
    </SelotMachineWrapper>
  );
};
export default SlotMachine;
