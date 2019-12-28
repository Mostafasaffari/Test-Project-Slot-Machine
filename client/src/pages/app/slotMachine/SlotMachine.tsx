import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { ISpin, Reel } from "../../../entities/slotMachine";

import { spinApi } from "../../../services/slotMachine";

import Button from "../../../components/ui-kit/button";

import SelotMachineWrapper from "./slotMachine.style";

const SlotMachine: React.FC = () => {
  const [position, setPosition] = useState<number>(0);
  const [positionReel1, setPositionReel1] = useState<number>(-1);
  const [positionReel2, setPositionReel2] = useState<number>(-1);
  const [positionReel3, setPositionReel3] = useState<number>(-1);
  const [intervalSpin, setIntervalSpin] = useState<number>(0);
  const { t } = useTranslation();

  const runSpin = async () => {
    // if (intervalSpin) {
    //   clearInterval(intervalSpin);
    //   setIntervalSpin(0);
    //   return;
    // }
    const inter = setInterval(() => {
      const randomPosition = Math.floor(Math.random() * 10) * 64 * 2000;
      setPosition(randomPosition);
    }, 100);
    setIntervalSpin(inter);
    const machineData: ISpin = await spinApi();
    console.log(machineData);
    setPositionReel1(calculatePositionOfIcon(machineData.Reel1));
    setPositionReel2(calculatePositionOfIcon(machineData.Reel2));
    setPositionReel3(calculatePositionOfIcon(machineData.Reel3));
    setTimeout(() => {
      clearInterval(inter);
      setIntervalSpin(0);
      setPosition(0);
    }, 3000);
  };
  return (
    <SelotMachineWrapper>
      <div className="slotmachine__header">
        <Button onClick={runSpin}>{t("slotMachine.spin")}</Button>
      </div>
      <div className="slotmachine__spin">
        <div
          className={[
            "slotmachine__spin--icon",
            intervalSpin === 0 && positionReel1 === -1
              ? "slotmachine__spin--question"
              : ""
          ].join(" ")}
          style={{ backgroundPositionY: `${position || positionReel1}px` }}
        ></div>
        <div
          className={[
            "slotmachine__spin--icon",
            intervalSpin === 0 && positionReel2 === -1
              ? "slotmachine__spin--question"
              : ""
          ].join(" ")}
          style={{ backgroundPositionY: `${position || positionReel2}px` }}
        ></div>
        <div
          className={[
            "slotmachine__spin--icon",
            intervalSpin === 0 && positionReel3 === -1
              ? "slotmachine__spin--question"
              : ""
          ].join(" ")}
          style={{ backgroundPositionY: `${position || positionReel3}px` }}
        ></div>
      </div>
    </SelotMachineWrapper>
  );
};

const calculatePositionOfIcon = (input: Reel): number => {
  switch (input) {
    case "apple":
      return 64;
    case "banana":
      return 0;
    case "cherry":
      return 256;
    case "lemon":
      return 128;
    default:
      return 0;
  }
};
export default SlotMachine;
