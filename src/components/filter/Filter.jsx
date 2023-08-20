import PropTypes from 'prop-types';
import React from 'react';

import { Label, Input } from './Filte.styled';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <Label>Find contacts by Name </Label>
    <Input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
