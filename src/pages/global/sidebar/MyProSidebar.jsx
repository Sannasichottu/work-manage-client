// docs https://github.com/azouaoui-med/react-pro-sidebar
import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import IosShareIcon from "@mui/icons-material/IosShare";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import MarkunreadMailboxTwoToneIcon from "@mui/icons-material/MarkunreadMailboxTwoTone";
import CallReceivedTwoToneIcon from "@mui/icons-material/CallReceivedTwoTone";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import ClassTwoToneIcon from "@mui/icons-material/ClassTwoTone";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : sidebarRTL ? (
                <SwitchLeftOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              ) : (
                <SwitchRightOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              )
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "& .avater-image": {
                    backgroundColor: colors.primary[500],
                  },
                }}
              >
                <img
                  className="avater-image"
                  alt="profile user"
                  width="100px"
                  height="100px"
                  src={
                    "https://thumbs.dreamstime.com/b/vector-illustration-icons-logo-car-details-car-service-auto-parts-store-flat-design-vector-illustration-icons-logo-car-248443504.jpg"
                  }
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Work Order Manage
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Customer
            </Typography>
            <Item
              title="User Profile"
              to="/customer/userProfile"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Item"
              to="/customer/addItem"
              icon={<NoteAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Send List"
              to="/customer/sendList"
              icon={<IosShareIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Received List"
              to="/customer/receivedList"
              icon={<FactCheckIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Admin
            </Typography>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Category"
              to="/admin/category"
              icon={<ClassTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Received Customer"
              to="/admin/receivedCustomer"
              icon={<MarkunreadMailboxTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Received Vendor"
              to="/admin/receivedVendor"
              icon={<CallReceivedTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
            <Item
              title="Update Quotation"
              to="/admin/updateQuotation"
              icon={<TipsAndUpdatesTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Forward Customer"
              to="/admin/sendCustomer"
              icon={<IosShareIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Vendor
            </Typography>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Received Admin"
              to="/vendor/receivedAdmin"
              icon={<CallReceivedTwoToneIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoice"
              to="/vendor/invoiceForm"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Forward Admin"
              to="/vendor/sendAdmin"
              icon={<IosShareIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
