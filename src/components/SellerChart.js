import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";

export default function SellerChart(props) {
  const [dataOption, setDataOption] = useState("This week");
  const upFromXl = useMediaQuery(props.theme.breakpoints.up("xl"));
  const upFromLg = useMediaQuery(props.theme.breakpoints.up("lg"));
  const upFromMd = useMediaQuery(props.theme.breakpoints.up("md"));

  const isMobile = useMediaQuery(props.theme.breakpoints.down("sm"));

  const options = {
    chart: {
      type: "column",
    },

    title: {
      text: "Total number of items sold last week",
    },

    xAxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },

    yAxis: {
      title: {
        //text: 'Total number of items sold',
        text: "",
      },
    },

    plotOptions: {
      column: {
        stacking: "normal",
      },
    },

    series: [
      {
        name: "Total number of items sold",
        data: [211, 451, 545, 123, 123, 1235, 555],
      },
    ],
  };

  // const darkTheme = {
  //   colors: ["blue"],
  // };
  // const lightTheme = {
  //   colors: ["red"],
  // };

  const handleChange = (event) => {
    setDataOption(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        height: "650px",
      }}
    >
      {isMobile ? (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{ mb: "24px" }}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            OPTIONS
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <Button variant="contained" color="primary">
                  {upFromMd ? (
                    <Typography>BAR GRAPH</Typography>
                  ) : (
                    <Typography>BAR</Typography>
                  )}
                </Button>
                <Button
                  variant="contained"
                  color="notActive"
                  sx={{
                    bgcolor: props.theme.palette.cardBackground,
                    color: props.theme.palette.notActiveButtonFont,
                  }}
                >
                  {upFromMd ? (
                    <Typography>LINE GRAPH</Typography>
                  ) : (
                    <Typography>LINE</Typography>
                  )}
                </Button>
              </div>
            </MenuItem>
            <MenuItem>
              <Stack direction="row" alignItems="center">
                {upFromXl ? (
                  <Typography color={props.theme.palette.notActiveButtonFont}>
                    TOTAL PROFIT
                  </Typography>
                ) : (
                  [
                    upFromLg ? (
                      <Typography
                        color={props.theme.palette.notActiveButtonFont}
                      >
                        PROFIT
                      </Typography>
                    ) : (
                      [
                        upFromMd ? (
                          <Typography
                            color={props.theme.palette.notActiveButtonFont}
                          >
                            TOTAL PROFIT
                          </Typography>
                        ) : (
                          <Typography
                            color={props.theme.palette.notActiveButtonFont}
                          >
                            PROFIT
                          </Typography>
                        ),
                      ]
                    ),
                  ]
                )}
                <Switch defaultChecked />
                {upFromXl ? (
                  <Typography color={props.theme.palette.font}>
                    NUMBER OF ITEMS
                  </Typography>
                ) : (
                  [
                    upFromLg ? (
                      <Typography color={props.theme.palette.font}>
                        ITEMS
                      </Typography>
                    ) : (
                      [
                        upFromMd ? (
                          <Typography color={props.theme.palette.font}>
                            NUMBER OF ITEMS
                          </Typography>
                        ) : (
                          <Typography color={props.theme.palette.font}>
                            ITEMS
                          </Typography>
                        ),
                      ]
                    ),
                  ]
                )}
              </Stack>
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label={
                  upFromXl ? (
                    <Typography color={props.theme.palette.notActiveButtonFont}>
                      INCLUDE PREVIOUS DATA
                    </Typography>
                  ) : (
                    <Typography color={props.theme.palette.notActiveButtonFont}>
                      PREVIOUS
                    </Typography>
                  )
                }
                labelPlacement="start"
              />
            </MenuItem>
            <MenuItem>
              <FormControl color="primary" variant="outlined">
                <Select
                  color="primary"
                  variant="outlined"
                  value={dataOption}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"Today"}>Today</MenuItem>
                  <MenuItem value={"This week"}>This week</MenuItem>
                  <MenuItem value={"This year"}>This year</MenuItem>
                </Select>
              </FormControl>
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            height: "60px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Button variant="contained" color="primary">
              {upFromMd ? (
                <Typography>BAR GRAPH</Typography>
              ) : (
                <Typography>BAR</Typography>
              )}
            </Button>
            <Button
              variant="contained"
              color="notActive"
              sx={{
                bgcolor: props.theme.palette.cardBackground,
                color: props.theme.palette.notActiveButtonFont,
              }}
            >
              {upFromMd ? (
                <Typography>LINE GRAPH</Typography>
              ) : (
                <Typography>LINE</Typography>
              )}
            </Button>
          </div>
          <Stack direction="row" alignItems="center">
            {upFromXl ? (
              <Typography color={props.theme.palette.notActiveButtonFont}>
                TOTAL PROFIT
              </Typography>
            ) : (
              [
                upFromLg ? (
                  <Typography color={props.theme.palette.notActiveButtonFont}>
                    PROFIT
                  </Typography>
                ) : (
                  [
                    upFromMd ? (
                      <Typography
                        color={props.theme.palette.notActiveButtonFont}
                      >
                        TOTAL PROFIT
                      </Typography>
                    ) : (
                      <Typography
                        color={props.theme.palette.notActiveButtonFont}
                      >
                        PROFIT
                      </Typography>
                    ),
                  ]
                ),
              ]
            )}
            <Switch defaultChecked />
            {upFromXl ? (
              <Typography color={props.theme.palette.font}>
                NUMBER OF ITEMS
              </Typography>
            ) : (
              [
                upFromLg ? (
                  <Typography color={props.theme.palette.font}>
                    ITEMS
                  </Typography>
                ) : (
                  [
                    upFromMd ? (
                      <Typography color={props.theme.palette.font}>
                        NUMBER OF ITEMS
                      </Typography>
                    ) : (
                      <Typography color={props.theme.palette.font}>
                        ITEMS
                      </Typography>
                    ),
                  ]
                ),
              ]
            )}
          </Stack>
          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label={
              upFromXl ? (
                <Typography color={props.theme.palette.notActiveButtonFont}>
                  INCLUDE PREVIOUS DATA
                </Typography>
              ) : (
                <Typography color={props.theme.palette.notActiveButtonFont}>
                  PREVIOUS
                </Typography>
              )
            }
            labelPlacement="start"
          />
          <FormControl color="primary" variant="outlined">
            <Select
              color="primary"
              variant="outlined"
              value={dataOption}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Today"}>Today</MenuItem>
              <MenuItem value={"This week"}>This week</MenuItem>
              <MenuItem value={"This year"}>This year</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}

      <HighchartsReact
        containerProps={{ style: { height: "80%" } }}
        highcharts={Highcharts}
        options={options}
      />
    </Box>
  );
}
