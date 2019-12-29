import styled from "styled-components";



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
  }
`;

export default SlotMachineWrapper;
