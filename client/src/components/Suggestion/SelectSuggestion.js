import React from 'react';
import Select from 'react-select';

const SelectSuggestion = ({ onChange, options, value }) => (
  <Select
    isSearchable={true}
    onChange={onChange}
    options={options}
    placeholder={'Select suggestion type'}
    value={value}
  />
);

export default SelectSuggestion;
