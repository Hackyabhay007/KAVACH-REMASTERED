import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  function handleOut(){
    localStorage.clear();
    
  }
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      {/* <div className="top">
      
      </div> */}
     
     
      <div className="center">
        <ul>
          <p className="title">MENU</p>


          <li>
        
          <DashboardIcon className="icon" />
          <Link to="/" style={{ textDecoration: "none" }}>
          <span>Area Map</span>
        </Link>
          </li>
         
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span> Active Users</span>
            </li>
          </Link>
       
          {/* <p className="title">Other Features</p> */}
          <Link to="/history" style={{ textDecoration: "none" }}>
          
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Solved Cases</span>
          </li>
          </Link>
        <Link to="/new" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleOut}>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
