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
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        color="primary"
        variant="outlined"
        value={dataOption}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
      >
        {props.items.map((item) => (
          <MenuItem value={item.value}>{item.value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
