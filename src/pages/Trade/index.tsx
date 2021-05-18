import { Container, Grid } from "@material-ui/core";

const Test = () => {
  return (
    <Container style={{ backgroundColor: "gray" }}>
      <Grid container>
        <Grid item xs={12} md={6} style={{ backgroundColor: "Dimgray" }}>
          검색
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container style={{ backgroundColor: "darkgray" }}>
            <Grid item xs={12} md={12}>
              현재가
            </Grid>
            <Grid item xs={12} md={12} style={{ backgroundColor: "Lightgray" }}>
              차트
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ color: "white", backgroundColor: "black" }}
            >
              호가
            </Grid>
            <Grid item xs={12} md={6}>
              거래
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;
