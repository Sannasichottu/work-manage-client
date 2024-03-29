import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

import Topbar from "./pages/global/Topbar";

// import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import UserProfile from "./components/customer/userProfile/UserProfile";
import AddItem from "./components/customer/addItem/AddItem";
import SendList from "./components/customer/sendList/SendList";
import ReceivedList from "./components/customer/recivedList/ReceivedList";

import ReceivedCustomer from "./components/admin/receivedCustomer/ReceivedCustomer"
import ReceivedVendor from "./components/admin/receivedVendor/ReceivedVendor"
import SendCustomer from "./components/admin/sendCustomer/SendCustomer"
import UpdateQuotation from "./components/admin/updateQuotation/UpdateQuotation"
import Category from "./components/admin/category/Category";

import ReceivedAdmin from "./components/Vendor/ReceivedAdmin";
import InvoiceForm from "./components/Vendor/invoice/InvoiceForm"
import ForwardAdmin from "./components/Vendor/ForwardAdmin";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />
              <Routes>
              <Route path="/" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<UserProfile />} />
                <Route path="/customer/userProfile" element={<UserProfile />} />
                <Route path="/customer/addItem" element={<AddItem/>} />
                <Route path="/customer/sendList" element={<SendList />} />
                <Route path="/customer/receivedList" element={<ReceivedList/>} />


                <Route path="/admin" element={<ReceivedCustomer />} />
                <Route path="/admin/receivedCustomer" element={<ReceivedCustomer />} />
                <Route path="/admin/receivedVendor" element={<ReceivedVendor/>} />
                <Route path="/admin/sendCustomer" element={<SendCustomer />} />
                <Route path="/admin/updateQuotation" element={<UpdateQuotation />} />
                <Route path="/admin/category" element={<Category />} />


                <Route path="/vendor/receivedAdmin" element={<ReceivedAdmin />} />
                <Route path="/vendor/invoiceForm" element={<InvoiceForm />} />
                <Route path="/vendor/sendAdmin" element={<ForwardAdmin />} />

                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
