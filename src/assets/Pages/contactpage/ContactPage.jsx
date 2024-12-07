import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./Data";
import Header from "../../components/Header";

const ContactPage = () => {
  return (
    <Box>
       <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
  
      <Box 
      
      sx={{ height: 600, mx: "auto" }}>
        <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
          rows={rows}
        
          columns={columns}
        />
      </Box>
    </Box>
  );
}
export default ContactPage;
