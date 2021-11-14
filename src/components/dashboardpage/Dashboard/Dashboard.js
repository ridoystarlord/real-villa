import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/Home";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import Star from "@mui/icons-material/Star";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import ViewList from "@mui/icons-material/ViewList";
import Payments from "@mui/icons-material/Payments";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../../../hooks/useAuth";
import MyProperties from "../MyProperties/MyProperties";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import "./Dashboard.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import GiveFeedback from "../GiveFeedback/GiveFeedback";
import AddNewProperty from "../AddNewProperty/AddNewProperty";
import PayNow from "../PayNow/PayNow";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import { useHistory } from "react-router";
import ManageProperty from "../ManageProperty/ManageProperty";
import AdminRoute from "../../shared/AdminRoute/AdminRoute";

const drawerWidth = 240;
const Dashboard = (props) => {
  const history = useHistory();
  const { user, isAdmin, logout, setUser, setIsLoading } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
        setUser({});
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar className="bg-toolbar">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          Dashboard
        </Typography>
      </Toolbar>
      <List>
        <Link className="text-decoration-none text-black" to="/">
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link className="text-decoration-none text-black" to={`${url}`}>
          <ListItem>
            <ListItemIcon>
              <ViewList />
            </ListItemIcon>
            <ListItemText>My Order</ListItemText>
          </ListItem>
        </Link>

        {!isAdmin && [
          <Link
            key="paynow"
            className="text-decoration-none text-black"
            to={`${url}/pay-now`}
          >
            <ListItem>
              <ListItemIcon>
                <Payments />
              </ListItemIcon>
              <ListItemText>Pay Now</ListItemText>
            </ListItem>
          </Link>,
          <Link
            key="feedback"
            className="text-decoration-none text-black"
            to={`${url}/give-feedback`}
          >
            <ListItem>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText>Give Feedback</ListItemText>
            </ListItem>
          </Link>,
        ]}

        {isAdmin && [
          <Link
            key="manageproperty"
            className="text-decoration-none text-black"
            to={`${url}/orders`}
          >
            <ListItem>
              <ListItemIcon>
                <ViewList />
              </ListItemIcon>
              <ListItemText>Manage all Orders</ListItemText>
            </ListItem>
          </Link>,
          <Link
            key="manageallorders"
            className="text-decoration-none text-black"
            to={`${url}/all-properties`}
          >
            <ListItem>
              <ListItemIcon>
                <ViewList />
              </ListItemIcon>
              <ListItemText>All Properties</ListItemText>
            </ListItem>
          </Link>,
          <Link
            key="makeadmin"
            className="text-decoration-none text-black"
            to={`${url}/make-admin`}
          >
            <ListItem>
              <ListItemIcon>
                <AdminPanelSettings />
              </ListItemIcon>
              <ListItemText>Make Admin</ListItemText>
            </ListItem>
          </Link>,
          <Link
            key="addnewproperty"
            className="text-decoration-none text-black"
            to={`${url}/add-new-property`}
          >
            <ListItem>
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText>Add a new Property</ListItemText>
            </ListItem>
          </Link>,
        ]}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {user.displayName}
          </Typography>
          <Button onClick={handleLogout} sx={{ color: "white" }} variant="text">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Paper sx={{ p: 5 }}>
          <Box>
            <Switch>
              <Route exact path={path}>
                <MyProperties></MyProperties>
              </Route>
              <AdminRoute path={`${path}/make-admin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/add-new-property`}>
                <AddNewProperty></AddNewProperty>
              </AdminRoute>
              <Route path={`${path}/give-feedback`}>
                <GiveFeedback></GiveFeedback>
              </Route>
              <Route path={`${path}/pay-now`}>
                <PayNow></PayNow>
              </Route>
              <AdminRoute path={`${path}/orders`}>
                <ManageAllOrder></ManageAllOrder>
              </AdminRoute>
              <AdminRoute path={`${path}/all-properties`}>
                <ManageProperty></ManageProperty>
              </AdminRoute>
            </Switch>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
