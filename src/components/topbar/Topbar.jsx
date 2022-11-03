import React from 'react' 
import "./topbar.css"
import {Language,Settings, Notifications as NotificationsIcon} from '@mui/icons-material';
export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Eliteboss</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                    <NotificationsIcon/>
                    <span className="topIconBadge">5
                    </span>
                    </div>
                    <div className="topbarIconsContainer">
                    <Language/>
                    <span className="topIconBadge">2
                    </span>
                    </div>
                    <div className="topbarIconsContainer">
                    <Settings/>
                   </div>
                   <img src="https://burst.shopifycdn.com/photos/man-takes-time-to-ponder.jpg?width=925&format=pjpg&exif=1&iptc=1" alt="avatar" className="topAvatar" />
                </div>
            </div></div>
    )

}
 