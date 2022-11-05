import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmallListItem">
          <img
            src="https://burst.shopifycdn.com/photos/man-takes-time-to-ponder.jpg?width=925&format=pjpg&exif=1&iptc=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Eliteboss</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://burst.shopifycdn.com/photos/man-smiles-over-coffee-in-cafe.jpg?width=925&format=pjpg&exif=1&iptc=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Justin ojak</span>
            <span className="widgetSmUserTitle">Cloud Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://burst.shopifycdn.com/photos/urban-mens-fashion.jpg?width=925&format=pjpg&exif=1&iptc=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">mark stone</span>
            <span className="widgetSmUserTitle">Backend Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://burst.shopifycdn.com/photos/male-dentist.jpg?width=925&format=pjpg&exif=1&iptc=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Jeff Omark</span>
            <span className="widgetSmUserTitle">Neurologist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://burst.shopifycdn.com/photos/stylish-man-in-bow-tie.jpg?width=925&format=pjpg&exif=1&iptc=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Dammy Omar</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
