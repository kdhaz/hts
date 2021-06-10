import { Container, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const CurrentPrice = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Typography variant="h4">SK텔레콤</Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography variant="h1"></Typography>
          </Box>
          <Box>전일대비</Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container>
            <Grid item xs={6}>
              <Box></Box>
              <Grid item xs={12} lg={6}>
                현재가
              </Grid>
              <Divider />
              <Grid item xs={12} lg={6}>
                전일가
              </Grid>
              <Box></Box>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrentPrice;
