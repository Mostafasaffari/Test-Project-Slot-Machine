import styled from "styled-components";

const iconAll = require("../../assets/images/all.png");
const question = require("../../assets/images/question.png");

const SpinnerWrapper = styled.div`
& .spinner__spin--icon {
    width: 64px;
    height: 64px;
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);
    transition: 0.3s background-position ease-in-out;
    transform: translateZ(0);
    border-radius: ${props => props.theme.borderRadius.box};
    background-image: url("${iconAll}");
  }
  & .spinner__spin--question{
    background-image: url("${question}");
  }
`;

export default SpinnerWrapper;
