import styled from 'styled-components'
const StyledSelect = styled.select`
  outline: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: var(--border-size4);
  padding: var(--spacing-unit);
  color: ${(props) => props.theme.offSetText};
  border: 1px solid ${(props) => props.theme.offSetText};
  appearance: none;
  :focus {
    border: 1px solid ${(props) => props.theme.action};
    outline: none;
  }
`
const StyledOption = styled.option`

`
export { StyledSelect, StyledOption }
