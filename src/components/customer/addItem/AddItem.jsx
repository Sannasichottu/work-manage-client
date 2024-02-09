import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Formik } from "formik";
import * as yup from 'yup';
import { useMediaQuery } from "@mui/material";
import Header from "../../../components/Header";
import AddCircleIcon from '@mui/icons-material/AddCircle';

// Form
import {   useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from '../../../theme';
import { mockAddItem } from '../../../data/mockData';
const AddItem = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
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
        firstName:yup.string().required("Required"),
        lastName:yup.string().required("Required"),
        email:yup.string().email("Invalid email!").required("Required"),
        contact:yup.string().matches(phoneRegExp, "phone number is not valid!").required("Required"),
        address1:yup.string().required("Required"),
        address2:yup.string().required("Required"),

    })

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
  { field: "width", headerName: "Width", width: 150 },
  { field: "height", headerName: "Height", width: 150 },
  { field: "quantity", headerName: "Quantity", width: 150 },
  { field: "action", headerName: "Action", width: 150 },

 
];


  return (
    <>
        <Box m="20px">
    <Header  subtitle="User Information" />

    <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit,}) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
                     <TextField
              fullWidth
              variant="filled"
              type="text"
              label="#Order Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="Order Number"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="UserName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="userName"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 2" }}
            />
            <Header  subtitle="Order Information" />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Material Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address1}
              name="materialname"
              error={!!touched.address1 && !!errors.address1}
              helperText={touched.address1 && errors.address1}
              sx={{ gridColumn: "span 4" }}
            />
          
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Width"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="width"
              error={!!touched.address2 && !!errors.address2}
              helperText={touched.address2 && errors.address2}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Height"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="Height"
              error={!!touched.address2 && !!errors.address2}
              helperText={touched.address2 && errors.address2}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Quantity"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name=""
              error={!!touched.address2 && !!errors.address2}
              helperText={touched.address2 && errors.address2}
              sx={{ gridColumn: "span 1" }}
            />
             <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              <AddCircleIcon />  <span style={{marginLeft:"10px"}}>Add Item</span>
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
       <DataGrid checkboxSelection rows={mockAddItem} columns={columns} />
     </Box>
   </Box>
    </>
  )
}

export default AddItem