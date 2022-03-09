import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface SelectInterface {
  label: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>, period?: string) => void
}

const SelectLabel = styled.label``;
const SelectInput = styled.select``;

const Select: FC<SelectInterface> = (props: SelectInterface) => {
  const { label, handleChange } = props;
  return (
    <SelectLabel>
      <SelectInput onChange={(e) => handleChange(e)} />
      {label}
    </SelectLabel>
  );
};

export default Select