import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./Data";
import Header from "../../components/Header";

 function InvoicesPage() {
  return (
    <Box>
   <Header title="INVOICES" subTitle="List of Invoice Balances" />

    <Box sx={{ height: 600, mx: "auto" }}>
      <DataGrid
      checkboxSelection
      
        rows={rows}
      
        columns={columns}
      />
    </Box>
  </Box>
  )
}
export default InvoicesPage;