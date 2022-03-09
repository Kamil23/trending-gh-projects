import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Filters } from '../interfaces';
import { AVAILABLE_PERIODS } from "../constants";
// components
import RadioButtonComponent from "../components/RadioButton";
//redux
import { LanguageItem, selectTime, selectProgrammingLang } from "../redux/slices/filters";
import { useDispatch } from "../redux/store";

// styled components
const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Box = styled.div`
  margin-bottom: 8px;
`;
const Label = styled.label`
  margin-right: 5px;
  font-size: 12px;
`;
const Select = styled.select``;

const FiltersComponent: FC<Filters> = ({selectedTime, selectedLang, languagesList}: Filters) => {
  
  const dispatch = useDispatch();

  const selectPeriod = (event: ChangeEvent<HTMLInputElement>, period: Filters['selectedTime']) => {
    event.preventDefault();
    dispatch(selectTime(period)
  )};

  const selectLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const name = e.target.getAttribute("data-name");
    const { value } = e.target;
    const selected: LanguageItem = {
      urlParam: value, 
      name: name
    } 
    dispatch(selectProgrammingLang(selected)
  )};

  return (
    <FiltersWrapper>
      <Box>
        <Label>Select period:</Label>
        {AVAILABLE_PERIODS.map((period: any, index: number) =>
          <RadioButtonComponent 
            key={index}
            label={period} 
            value={period} 
            checked={period === selectedTime} 
            handleChange={(e: ChangeEvent<HTMLInputElement>) => selectPeriod(e, period)} />
        )}
      </Box>
      {languagesList &&
        <Box>
          <Label>Language:</Label>
          <Select onChange={(e) => selectLanguage(e)}>
            {languagesList.map((option: LanguageItem, index) => (
              <option key={index} selected={option.urlParam === selectedLang?.urlParam} data-name={option.name} value={option.urlParam}>{option.name}</option>
            ))}
          </Select>
        </Box>
      }
    </FiltersWrapper>
  );
}
 
export default FiltersComponent;