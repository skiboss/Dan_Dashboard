import "./sidebar.css";
import {
  People,
  Inventory2,
  Paid,
  Assessment,
  Email,
  DynamicFeed,
  Message,
  ManageSearch,
  Report,
  Timeline,
  TrendingUp,
  LineStyle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="Link">
              <li className="sidebarListItem ">
                <People className="People" />
                Users
              </li>
            </Link>
            <Link to="/products" className="Link">
              <li className="sidebarListItem">
                <Inventory2 />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <Paid />
              Transaction
            </li>
            <li className="sidebarListItem">
              <Assessment />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Email className="Email" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageSearch className="ManageSearch" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
