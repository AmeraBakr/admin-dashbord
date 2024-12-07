import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import BarChart from "./BarChart";
import Header from "../../components/Header";

const BarPage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <BarChart />
    </Box>
  );
};

export default BarPage;
