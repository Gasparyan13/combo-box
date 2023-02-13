import React, { useCallback, useState } from 'react';
import { AutocompleteProps, Event, KeyboardEvent } from './Autocomplete.types';
import {
  FormControl,
  FormOption,
  Input,
  Item,
  Root
} from './Autocomplete.styled';

export const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  placeholder,
  data,
  onSelected,
  onChange,
  disabled
}) => {
  const [optionItems, setOptionItems] = useState<string[]>([]);
  const [isHideOption, setIsHideOption] = useState<boolean>(false);
  const [selectedVal, setSelectedVal] = useState<string>('');

  const handlerOnKeyUp = useCallback(
    (e: KeyboardEvent) => {
      setOptionItems(
        data.filter((i) => {
          return i.startsWith((e.target as HTMLInputElement).value);
        })
      );
    },
    [data]
  );

  const handleChange = useCallback(
    (e: Event) => {
      const value: string = e.target.value;
      setSelectedVal(value);
      setIsHideOption(true);
      onChange(value);
    },
    [onChange]
  );

  const handlerHideOption = useCallback(
    (value: string) => () => {
      onSelected(value);
      setSelectedVal(value);
      setIsHideOption(false);
    },
    [onSelected]
  );

  const handleClickInput = useCallback(() => {
    setIsHideOption(!isHideOption);
  }, [isHideOption]);

  return (
    <Root>
      <FormControl>
        <label htmlFor="tag-input" aria-disabled={disabled}>
          {label}
        </label>
        <Input
          placeholder={placeholder}
          type="search"
          onClick={handleClickInput}
          value={selectedVal}
          onChange={handleChange}
          onKeyUp={handlerOnKeyUp}
          disabled={disabled}
        />
      </FormControl>
      {isHideOption && (
        <FormOption>
          {(optionItems.length ? optionItems : data).map((item, idx) => (
            <Item key={'' + item + idx} onClick={handlerHideOption(item)}>
              {item}
            </Item>
          ))}
        </FormOption>
      )}
    </Root>
  );
};
