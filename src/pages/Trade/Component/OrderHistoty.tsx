import { Box } from "@material-ui/core";

type Order = {
  index: number;
  value: number;
};

const OrderHistory = (props: Order) => {
  const { index, value } = props;

  return <Box hidden={index !== value}>거래내역</Box>;
};

export default OrderHistory;
