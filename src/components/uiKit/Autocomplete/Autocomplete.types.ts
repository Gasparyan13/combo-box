import React from 'react';

export type AutocompleteProps = {
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  placeholder: string;
  onChange: (arg: string) => void;
  onSelected: (arg: string) => void;
  data: string[];
};

export type Event = React.ChangeEvent<HTMLInputElement>;
export type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
