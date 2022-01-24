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

// import { makeStyles } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import green from "@mui/material/colors/green";
import orange from "@mui/material/colors/orange";
import "@fontsource/roboto";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// const useStyles = makeStyles({
//   root: {
//     border: 0,
//     borderRadius: 15,
//     color: "white",
//     padding: "5px 30px",
//     marginBottom: 15,
//     background: "linear-gradient(45deg,#FE6B8B,#FE8E53)",
//   },
// });

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[400],
    },
  },
});

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>;
// }

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="secondary"
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
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            {/* <ButtonStyled /> */}
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginLeft: 2 }}
                >
                  Login
                </Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2" component="div" sx={{ marginTop: 4 }}>
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle">
              Learn how to use Material UI
            </Typography>
            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="Your Email"
              placeholder="test@test.com"
            />
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
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
                color="primary"
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
