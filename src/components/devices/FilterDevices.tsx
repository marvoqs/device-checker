import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Material-UI
import { Checkbox, FormControl, FormControlLabel, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import { updateFilter } from '../../actions/filter';

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
    <>
      <FormControl>
        <InputLabel id='os' shrink>
          Systém
        </InputLabel>
        <Select displayEmpty id='os' labelId='os' name='os' onChange={handleChange} value={formData.os}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value='ANDROID'>ANDROID</MenuItem>
          <MenuItem value='IOS'>IOS</MenuItem>
          <MenuItem value='WINDOWS'>WINDOWS</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id='vendor' shrink>
          Výrobce
        </InputLabel>
        <Select displayEmpty id='vendor' labelId='vendor' name='vendor' onChange={handleChange} value={formData.vendor}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value='ACER'>ACER</MenuItem>
          <MenuItem value='APPLE'>APPLE</MenuItem>
          <MenuItem value='ASUS'>ASUS</MenuItem>
          <MenuItem value='HUAWEI'>HUAWEI</MenuItem>
          <MenuItem value='LG'>LG</MenuItem>
          <MenuItem value='MOTOROLA'>MOTOROLA</MenuItem>
          <MenuItem value='SAMSUNG'>SAMSUNG</MenuItem>
          <MenuItem value='VODAFONE'>VODAFONE</MenuItem>
          <MenuItem value='XIAOMI'>XIAOMI</MenuItem>
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
      <FormControl>
        <InputLabel id='model'>Hledat model</InputLabel>
        <Input id='model' name='model' onChange={handleChange} type='text' value={formData.model} />
      </FormControl>
    </>
  );
};

export default FilterDevices;
