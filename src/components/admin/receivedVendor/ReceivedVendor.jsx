import React from "react";
// Form
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockReceivedVendor } from "../../../data/adminData"

const ReceivedVendor = () => { 
  // Form
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Material Name",
      width: 250,
      cellClassName: "name-column--cell",
    },
    
    { field: "quantity", headerName: "Quantity", width: 150 },
    { field: "unitPrice", headerName: "Unit Price", width: 150 },
    { field: "totalPrice", headerName: "Total Price", width: 150 },
    { field: "action", headerName: "Action", width: 150 },
  ];

  return (
    <>
      {/* Form */}
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
          <DataGrid checkboxSelection rows={mockReceivedVendor} columns={columns} />
        </Box>
      </Box>
     
      
    </>
  );
};

export default ReceivedVendor;
