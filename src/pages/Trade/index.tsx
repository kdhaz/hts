import { Container, Grid } from "@material-ui/core";
import Order from "./Component/Order";
import Search from "./Component/Search";
import AskingPrice from "./Component/AskingPrice";
import ItemChart from "./Component/ItemChart";
import CurrentPrice from "./Component/CurrentPrice";
const Test = () => {
  return (
    <Container style={{ backgroundColor: "gray" }}>
      <Grid container>
        <Grid item xs={12} lg={3} style={{ backgroundColor: "Dimgray" }}>
          <Search />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container style={{ backgroundColor: "darkgray" }}>
            <Grid item xs={12} lg={12}>
              <CurrentPrice />
            </Grid>
            <Grid item xs={12} lg={12} style={{ backgroundColor: "Lightgray" }}>
              <ItemChart />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              style={{ color: "white", backgroundColor: "#616A6B" }}
            >
              <AskingPrice />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Order></Order>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;
