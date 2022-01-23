import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
