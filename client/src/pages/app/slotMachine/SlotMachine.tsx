import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { ISpin, Reel } from "../../../entities/slotMachine";

import { spinApi } from "../../../services/slotMachine";

import userActions from "../../../redux/user/actions";

import Spinner from "../../../components/spinner";
import Button from "../../../components/ui-kit/button";
import message from "../../../components/ui-kit/message";

import SelotMachineWrapper from "./slotMachine.style";

const SlotMachine: React.FC = () => {
  const [position, setPosition] = useState<number>(0);
  const [positionReel1, setPositionReel1] = useState<number>(-1);
  const [positionReel2, setPositionReel2] = useState<number>(-1);
  const [positionReel3, setPositionReel3] = useState<number>(-1);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const runSpin = async () => {
    try {
      const inter = setInterval(() => {
        const randomPosition = Math.floor(Math.random() * 10) * 64 * 2000;
        setPosition(randomPosition);
      }, 100);
      const machineData: ISpin = await spinApi();
      setPositionReel1(calculatePositionOfIcon(machineData.Reel1));
      setPositionReel2(calculatePositionOfIcon(machineData.Reel2));
      setPositionReel3(calculatePositionOfIcon(machineData.Reel3));
      setTimeout(() => {
        clearInterval(inter);
        setPosition(0);
        dispatch(userActions.setUserCoin(machineData.coins));
      }, 2000);
    } catch (err) {
      message.error(err.message);
    }
  };
  return (
    <SelotMachineWrapper>
      <div className="slotmachine__header">
        <Button onClick={runSpin}>{t("slotMachine.spin")}</Button>
      </div>
      <div className="slotmachine__spin">
        <Spinner positionReel={positionReel1} randomPosition={position} />
        <Spinner positionReel={positionReel2} randomPosition={position} />
        <Spinner positionReel={positionReel3} randomPosition={position} />
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
      return 192;
    case "lemon":
      return 128;
    default:
      return 0;
  }
};
export default SlotMachine;
