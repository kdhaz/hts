import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { truncate } from "node:fs";

import { Bar } from "react-chartjs-2";

type DataSetType = {
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
};

type DataType = {
  labels: string[];
  datasets: DataSetType[];
};

type RowType = {
  price: number;
  percent: number;
  dataSet: DataType;
};

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255,1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const increaseAskingPrices: RowType[] = [
  {
    price: 192400,
    percent: 4,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-20],
          backgroundColor: ["rgba(255,0,0,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 190500,
    percent: 3,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-18],
          backgroundColor: ["rgba(255,0,0,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 188700,
    percent: 2,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-16],
          backgroundColor: ["rgba(255,0,0,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 186580,
    percent: 1,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-14],
          backgroundColor: ["rgba(255,0,0,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 185000,
    percent: 0,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-12],
          backgroundColor: ["rgba(255,0,0,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
];

const decreaseAskingPrices: RowType[] = [
  {
    price: 183150,
    percent: -1,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [12],
          backgroundColor: ["rgba(0,0,255,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 181300,
    percent: -2,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [14],
          backgroundColor: ["rgba(0,0,255,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 179450,
    percent: -3,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [16],
          backgroundColor: ["rgba(0,0,255,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 177600,
    percent: -4,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [18],
          backgroundColor: ["rgba(0,0,255,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 175750,
    percent: -5,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [20],
          backgroundColor: ["rgba(0,0,255,0.2)"],
          borderColor: ["rgba(255,99,132,0.2)"],
          borderWidth: 1,
        },
      ],
    },
  },
];
const increaseOption = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      min: -30,
      max: 0,
      ticks: {
        display: false,
        stepSize: 5,
      },
    },
    y: {
      grid: { display: false, drawBorder: false },
      ticks: {
        display: false,
      },
    },
  },
};

const decreaseOption = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      min: 0,
      max: 30,
      ticks: {
        display: false,
        stepSize: 5,
      },
    },
    y: {
      grid: { display: false, drawBorder: false },
      ticks: {
        display: false,
      },
    },
  },
};

const AskingPrice = () => {
  return (
    <Box>
      <TableContainer>
        <Table size="small">
          <TableHead></TableHead>
          <TableBody>
            {increaseAskingPrices.map((row: RowType) => {
              return (
                <TableRow key={row.price}>
                  <TableCell width="90px">
                    <Box width="90px" height="30px">
                      <Bar
                        type="horizontalBar"
                        data={row.dataSet}
                        options={increaseOption}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.percent}%</TableCell>
                  <TableCell width="90"></TableCell>
                </TableRow>
              );
            })}
            {decreaseAskingPrices.map((row: RowType) => {
              return (
                <TableRow key={row.price}>
                  <TableCell width="90px"></TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.percent}%</TableCell>
                  <TableCell width="90">
                    <Box width="90px" height="30px">
                      <Bar
                        type=""
                        data={row.dataSet}
                        options={decreaseOption}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AskingPrice;
