import { Autocomplete } from '../uiKit/Autocomplete/Autocomplete';
import { data } from '../constants/data';

const handleOnChange = (value: string) => {
  console.log(value);
};

const getSelectedVal = (value: string) => {
  console.log(value);
};

export function ComboBox() {
  return (
    <Autocomplete
      placeholder="Выберите страну"
      data={data}
      label="Список стран"
      onChange={handleOnChange}
      onSelected={getSelectedVal}
    />
  );
}
