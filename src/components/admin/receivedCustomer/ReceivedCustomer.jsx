import React from "react";
// Recived List From Customer
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockRecivedCustomer } from "../../../data/adminData";
const ReceivedCustomer = () => {
  // Recived List From Customer
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Order Num" },

    {
      field: "name",
      headerName: "Material Name",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "customName",
      headerName: "Customer Name",
      width: 150,
      cellClassName: "name-column--cell",
    },
    { field: "quantity", headerName: "Quantity", width: 90 },
    { field: "width", headerName: "Width", width: 90 },
    { field: "height", headerName: "Height", width: 90 },
    { field: "cratedAt", headerName: "CreatedAt", width: 90 },
    { field: "send", headerName: "Send to Vendor", width: 100 },
  ];

  return (
    <>
      <Box m="50px">
        <Box
          m="8px 0 0 0"
          height="80vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiChackbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid
            checkboxSelection
            rows={mockRecivedCustomer}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  );
};

export default ReceivedCustomer;
