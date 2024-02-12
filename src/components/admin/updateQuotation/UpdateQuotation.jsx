import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../../components/Header";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

// Form
import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockUpdateQuotation } from "../../../data/adminData";

const UpdateQuotation = () => {
   // Recived List From Vendor
   const isNonMobile = useMediaQuery("(min-width:600px)");
   const phoneRegExp =
     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
   const handleFormSubmit = (values) => {
     console.log(values);
   };
   const initialValues = {
     firstName: "",
     lastName: "",
     email: "",
     contact: "",
     address1: "",
     address2: "",
   };
   const checkoutSchema = yup.object().shape({
     firstName: yup.string().required("Required"),
     lastName: yup.string().required("Required"),
     email: yup.string().email("Invalid email!").required("Required"),
     contact: yup
       .string()
       .matches(phoneRegExp, "phone number is not valid!")
       .required("Required"),
     address1: yup.string().required("Required"),
     address2: yup.string().required("Required"),
   });
 
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
     { field: "quantity", headerName: "Quantity", width: 100 },
     { field: "unitPrice", headerName: "Unit price", width: 100 },
     { field: "tax", headerName: "Tax", width: 100 },
     { field: "totalPrice", headerName: "Total Price", width: 100 },
     { field: "action", headerName: "Send", width: 150 },
   ];
  return (
    <>
    
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Header subtitle="Update Quotation" />
              <TextField
                fullWidth  
                type="text"
                label="Material Name"
                defaultValue="Manifold"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
               defaultValue="50"
                name=""
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Unit Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="unitPrice"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tax"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="tax"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Total Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="totalPrice"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 1" }}
              />
             
              <Box display="flex" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  <ModeEditIcon />{" "}
                  <span style={{ marginLeft: "10px" }}>Edit Value</span>
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>

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
        <DataGrid checkboxSelection rows={mockUpdateQuotation} columns={columns} />
      </Box>
    </Box>
  </>
  )
}

export default UpdateQuotation