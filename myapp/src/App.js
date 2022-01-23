import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

import { makeStyles,createTheme,ThemeProvider} from "@mui/material/styles";

import orange from "@mui/material/colors/orange";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
    marginBottom: 15,
    background: "linear-gradient(45deg,#FE6B8B,#FE8E53)",
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="Your Email"
            placeholder="test@test.com"
          />
          <CheckboxExample />
          <ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              onClick={() => alert("Hello!")}
              size="large"
              // disabled
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={() => alert("Hello!")}
              size="large"
              // disabled
              variant="contained"
              color="secondary"
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;