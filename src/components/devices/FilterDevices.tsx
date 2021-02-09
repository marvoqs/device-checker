import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { updateFilter } from '../../actions/filter';

// Data
import { systems, vendors } from '../../data';

// Material-UI
import { Box, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const FilterDevices: FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FilterType>({
    available: false,
    model: '',
    os: '',
    vendor: '',
  });

  useEffect(() => {
    dispatch(updateFilter(formData));
  }, [dispatch, formData]);

  const handleChange = (e: React.ChangeEvent<{ value: unknown; name?: string }>): void => {
    setFormData((formData: FilterType) => ({ ...formData, [e.target.name as keyof typeof formData]: e.target.value }));
  };

  return (
    <Box display='flex'>
      <FormControl>
        <InputLabel id='os' shrink>
          Systém
        </InputLabel>
        <Select displayEmpty id='os' labelId='os' name='os' onChange={handleChange} value={formData.os}>
          <MenuItem value=''>Nezáleží</MenuItem>
          {systems.map((system) => (
            <MenuItem value={system}>{system}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id='vendor' shrink>
          Výrobce
        </InputLabel>
        <Select displayEmpty id='vendor' labelId='vendor' name='vendor' onChange={handleChange} value={formData.vendor}>
          <MenuItem value=''>Nezáleží</MenuItem>
          {vendors.map((vendor) => (
            <MenuItem value={vendor}>{vendor}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.available}
            onChange={() => setFormData({ ...formData, available: !formData.available })}
            name='available'
            color='primary'
          />
        }
        label='Jen dostupné'
      />
      <Grid container spacing={1} alignItems='flex-end'>
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField id='model' label='Hledat model' name='model' onChange={handleChange} value={formData.model} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterDevices;
