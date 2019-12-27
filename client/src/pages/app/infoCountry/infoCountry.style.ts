import styled from "styled-components";

const InfoCountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.background.box};
  border-radius: ${props => props.theme.borderRadius.box};
  min-height: 400px;
  & .ant-card-body {
    padding: 20px 0;
  }
  & .infocountry__card {
    border: none;
    width: 320px;
    min-height: 240px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
    margin: ${props => props.theme.sizes.spacing.l5};
    border-radius: ${props => props.theme.borderRadius.box};
    & img {
      width: 16px;
      height: 16px;
    }
    & .infocountry__card__content--row {
      display: flex;
      justify-content: flex-start;
      & span {
        margin: 10px;
        min-width: 140px;
      }
    }
  }
  & .boxhide {
    box-shadow: none;
  }
`;

export default InfoCountryWrapper;
