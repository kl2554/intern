import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => (
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Search movies..."
    value={value}
    onChange={onChange}
    sx={{ marginBottom: 2 }}
  />
);

export default SearchBar;
