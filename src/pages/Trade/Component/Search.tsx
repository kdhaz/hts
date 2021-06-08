import {
  Box,
  TableContainer,
  Table,
  TextField,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@material-ui/core";

type ColumnType = {
  id: string;
  label: string;
};

type RowType = {
  [key: string]: string | number | PastTradePriceType;
};

type PastTradePriceType = {
  price: number;
  percent: number;
};

const columns: ColumnType[] = [
  { id: "name", label: "종목명" },
  { id: "currentPrice", label: "현재가" },
  { id: "pastPrice", label: "전일대비" },
];
const rows: RowType[] = [
  {
    name: "비트코인",
    currentPrice: 47630000,
    pastPrice: { price: 10000, percent: 0.67 },
  },
  {
    name: "이더리움",
    currentPrice: 3381000,
    pastPrice: { price: 10000, percent: -2.71 },
  },
  {
    name: "리플",
    currentPrice: 1200,
    pastPrice: { price: 10000, percent: -1.61 },
  },
  {
    name: "던프로토콜",
    currentPrice: 4040,
    pastPrice: { price: 10000, percent: -4.28 },
  },
  {
    name: "엔진코인",
    currentPrice: 2150,
    pastPrice: { price: 10000, percent: -7.94 },
  },
  {
    name: "메디블록",
    currentPrice: 94,
    pastPrice: { price: 10000, percent: -2.58 },
  },
  {
    name: "도지코인",
    currentPrice: 413,
    pastPrice: { price: 10000, percent: -3.29 },
  },
  {
    name: "이오스",
    currentPrice: 9030,
    pastPrice: { price: 10000, percent: 18.1 },
  },
  {
    name: "칠리즈",
    currentPrice: 378,
    pastPrice: { price: 10000, percent: -6.45 },
  },
  {
    name: "에이다",
    currentPrice: 2090,
    pastPrice: { price: 10000, percent: -2.11 },
  },
];

const Search = () => {
  return (
    <Box>
      <Box>
        <form>
          <TextField
            variant="outlined"
            margin="dense"
            placeholder="종목명"
            fullWidth
          />
        </form>
      </Box>
      <Box>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: RowType) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.toString()}
                  >
                    {columns.map((column: ColumnType) => {
                      if (column.id === "pastPrice") {
                        const pastPrice = row[column.id] as PastTradePriceType;
                        return (
                          <TableCell key={column.id}>
                            {pastPrice.price}
                          </TableCell>
                        );
                      }
                      const value = row[column.id] as string | number;
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Search;
