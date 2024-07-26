import { Box, Grid } from "@mui/material";
import "./App.css";
import Login from "./formik/Login";

function App() {
  return (
    <>
      <div className="test" />
      <Grid container>
        <Grid item xs={6}>
          <Box>
            <div className="test" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Login />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
