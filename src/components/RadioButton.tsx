import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface RadioButtonInterface {
  key?: number;
  label: string;
  value: string;
  checked?: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>, period: string) => void
}

const RadioLabel = styled.label`
  font-size: 12px;
`;
const RadioButton = styled.input``;

const RadioButtonComponent: FC<RadioButtonInterface> = (props: RadioButtonInterface) => {
  const { label, value, checked, handleChange } = props;
  return (
    <RadioLabel>
      <RadioButton type="radio" checked={checked} onChange={(e) => handleChange(e, value)} />
      {label}
    </RadioLabel>
  );
};

export default RadioButtonComponent