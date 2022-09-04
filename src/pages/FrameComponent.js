import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Icon,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Box,
  Slider,
  Autocomplete as MuiAutocomplete,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Dropdown as BsDropdown,
  DropdownButton,
  SplitButton,
} from "react-bootstrap";
import { Input } from "@chakra-ui/react";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.frameDiv}>
        <Button
          className={styles.buttonContainedTextAndIco}
          variant="contained"
          color="primary"
          endIcon={<Icon>arrow_forward_sharp</Icon>}
        >
          Button
        </Button>
        <TextField
          className={styles.inputStandardTextField}
          sx={{ width: 220 }}
          color="primary"
          variant="standard"
          defaultValue="Input"
          type="text"
          label="Label"
          size="medium"
          margin="none"
        />
        <FormControlLabel
          className={styles.checkboxCheckedCheckboxAnd}
          label="Label"
          labelPlacement="end"
          control={<Checkbox color="primary" defaultChecked size="medium" />}
        />
        <FormControl
          className={styles.selectStandardFormControl}
          sx={{ width: 220 }}
          variant="standard"
        >
          <InputLabel color="primary">Label</InputLabel>
          <Select color="primary" size="medium" label="Label">
            <MenuItem value="a">a</MenuItem>
            <MenuItem value="b">b</MenuItem>
            <MenuItem value="c">c</MenuItem>
            <MenuItem value="d">d</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <DropdownButton
          className={styles.dropdownButtonWithDropdown}
          title="Dropdown"
          variant="primary"
          align="start"
          drop="down"
        >
          <BsDropdown.Item>Option 1</BsDropdown.Item>
          <BsDropdown.Item>Option 2</BsDropdown.Item>
          <BsDropdown.Item>Option 3</BsDropdown.Item>
        </DropdownButton>
        <Box className={styles.sliderContinuousBox} sx={{ width: 494 }}>
          <Slider color="primary" defaultValue={20} orientation="horizontal" />
        </Box>
        <div className={styles.datePickerDiv}>
          <MuiDatePicker
            label="Date picker"
            value={datePickerDateTimePickerValue}
            onChange={(newValue) => {
              setDatePickerDateTimePickerValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                variant="standard"
                size="medium"
                renderInput={{ placeholder: "01/01/2022" }}
                helperText=""
              />
            )}
          />
        </div>
        <Input
          className={styles.dTPickerOutlinedInput}
          variant="outline"
          width="320px"
          type="date"
        />
        <MuiAutocomplete
          className={styles.autocompleteStandardMuiAutocomplete}
          sx={{ width: "100%" }}
          disablePortal
          options={["ahmed", "essam", "morsi", "ali", "amr"]}
          renderInput={(params) => (
            <TextField
              {...params}
              color="primary"
              label="Label"
              variant="standard"
              placeholder=""
              helperText=""
            />
          )}
          defaultValue="Value"
          size="small"
        />
      </div>
    </LocalizationProvider>
  );
};

export default FrameComponent;
