import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

export default function MySelect(props) {
  const [dataOption, setDataOption] = useState(props.default.value);

  const handleChange = (event) => {
    setDataOption(event.target.value);
    // Send there info to parent about that change
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: props.width == null ? 150 : props.width }}
    >
      <Select
        variant="outlined"
        value={dataOption}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          color: props.theme.palette.font,
          "& .MuiSelect-outlined": {
            backgroundColor: props.theme.palette.primary.main,
          },
          "& .MuiSelect-icon": {
            color: props.theme.palette.font,
          },
        }}
      >
        {props.items.map((item) => (
          <MenuItem
            value={item.value}
            sx={{
              "& .MenuItem": {
                background: "red",
              },
            }}
          >
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
