import React, { useState } from "react";
import {
  TextField,
  Autocomplete,
  Chip,
  Box,
  Typography,
  InputAdornment,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function SearchJob({ title, icon: Icon, options }) {
  const [selectedValues, setSelectedValues] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleChange = (event, newValue) => {
    if (newValue.length <= 5) {
      setSelectedValues(newValue);
    }
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(newInputValue.toLowerCase())
      )
    );
  };

  return (
    <Box>
      <Autocomplete
        multiple
        freeSolo
        options={filteredOptions}
        value={selectedValues}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleChange}
        renderTags={(value, getTagProps) =>
          value.slice(0, 3).map((option, index) => (
            <Chip key={option} label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={title}
            variant="outlined"
            sx={{ minWidth: 200 }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Icon color="red"/>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowDropDownIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      {inputValue && filteredOptions.length === 0 && (
        <Typography sx={{ marginTop: 1, fontSize: "14px", color: "gray" }}>
          {inputValue}
        </Typography>
      )}
    </Box>
  );
}
