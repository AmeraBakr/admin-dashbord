import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../Data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";
const TeamPage = () => {
  const theme = useTheme();


  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", 
    flex: 1,

    align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "7px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              margin: "auto", // تمت إضافته
              justifyContent: "space-evenly",
              backgroundColor:
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "Manager"
                ? theme.palette.secondary.dark
                : "#3da58a",
          }}
        >
          {access === "Admin" && (
            <AdminPanelSettingsOutlined
              sx={{ color: "#fff" }}
              fontSize="small"
            />
          )}

          {access === "Manager" && (
            <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
          )}

          {access === "User" && (
            <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
          )}

          <Typography sx={{ fontSize: "13px", color: "#fff" }}>
            {access}
          </Typography>
        </Box>
      );
    },
  },
];

return (
  <Box>
    <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

    <Box sx={{ height: 600, mx: "auto" , alignContent: "center"}}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  </Box>
);
};
export default TeamPage;
