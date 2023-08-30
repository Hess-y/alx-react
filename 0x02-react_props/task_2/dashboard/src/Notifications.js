import React from 'react';
import './Notifications.css'; // Import the CSS file
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  return (
    <div className="Notifications">
       <button
        style={{ float: 'right' }} // Add inline styling to position the button on the right
	        <ul>
	          <li data-priority="default">New course available</li>
	          <li data-priority="urgent">New resume available</li>
	          <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
	        </ul>
        aria-label="Close"
        onClick={console.log('Close button has been clicked')};
      >
        <img src={closeIcon} alt="Close Icon" width="10px" /> {/* Add the close-icon image */}
      </button>
      <p>Here is the list of notifications</p>
       <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;

