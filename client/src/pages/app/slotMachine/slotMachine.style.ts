import styled from "styled-components";

const iconAll = require("../../../assets/images/all.png");
const question = require("../../../assets/images/question.png");

const SlotMachineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${props => props.theme.sizes.spacing.l5};
  background: ${props => props.theme.colors.background.box};
  border-radius: ${props => props.theme.borderRadius.box};
  align-items: center;
  & .slotmachine__spin {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 350px;
    margin-top: ${props => props.theme.sizes.spacing.xl4};
    & .slotmachine__spin--icon {
      width: 64px;
      height: 64px;
      box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);
      transition: 0.3s background-position ease-in-out;
      transform: translateZ(0);
      border-radius: ${props => props.theme.borderRadius.box};
      background-image: url("${iconAll}");
    }
    & .slotmachine__spin--question{
      background-image: url("${question}");
    }
  }
`;

export default SlotMachineWrapper;
