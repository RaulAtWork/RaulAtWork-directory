import React from "react";

export const STATUS = {
  INPROGRESS: 0,
  DONE: 1,
  TO_DO: 3,
};

// Store all the display and css class for the status badges
function getStatusDetails(status) {
  switch (status) {
    case STATUS.INPROGRESS:
      return { display: "In progress", class: "status-badge inprogress" };
    case STATUS.DONE:
      return { display: "Done", class: "status-badge done" };
    case STATUS.TO_DO:
      return { display: "To do", class: "status-badge todo" };
  }
}

function StatusBadge({ status }) {
    const badge = getStatusDetails(status)
    if(!badge)
        return 
    //else
    return <span className={badge.class}>{badge.display}</span>

}

export default StatusBadge;
