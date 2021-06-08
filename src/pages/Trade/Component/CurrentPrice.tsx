import { Container, Grid } from "@material-ui/core";

const CurrentPrice = () => {
  return (
    <Container style={{ backgroundColor: "gray" }}>
      <Grid container>
        <Grid item xs={12} lg={12} style={{ backgroundColor: "white" }}>
          sk텔레콤
        </Grid>
        <Grid item xs={12} lg={6} style={{ backgroundColor: "white" }}>
          150000원
        </Grid>
        <Grid item xs={12} lg={3} style={{ backgroundColor: "white" }}>
          고가 172000
        </Grid>
        <Grid item xs={12} lg={3} style={{ backgroundColor: "white" }}>
          거래량(24H)
        </Grid>
      </Grid>
    </Container>
  );
};

export default CurrentPrice;
