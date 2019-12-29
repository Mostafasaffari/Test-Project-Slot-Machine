import styled from "styled-components";

const TagFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  & .tag__filter__newtag {
    &--addtag {
      border: 1px dashed;
      background: ${props => props.theme.colors.background.box};
      cursor: poiner;
    }
  }
  & button {
    min-height: 25px;
    min-width: 50px;
    margin-left: ${props => props.theme.sizes.spacing.l3};
  }
`;

export default TagFilterWrapper;
