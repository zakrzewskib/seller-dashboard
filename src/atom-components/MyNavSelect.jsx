import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import GlobalStyles from "@mui/material/GlobalStyles";
import ListItemWithImage from "./ListItemWithImage";

export default function MySelect(props) {
  const [option, setOption] = useState(props.default.value);

  const handleChange = event => {
    setOption(event.target.value);
    props.onHandleChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: props.width == null ? 150 : props.width }}>
      <GlobalStyles
        styles={{
          ".MuiList-root.MuiList-padding.MuiMenu-list": {
            backgroundColor: props.theme.palette.background.default,
          },
        }}
      />
      <Select
        variant="outlined"
        value={option}
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
        {props.items.map(item => (
          <MenuItem
            value={item.value}
            key={Math.random()}
            sx={{
              color: props.theme.palette.font,
            }}
          >
            <ListItemWithImage primary={item.value} secondary={item.secondary} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
