import React from "react";

import "./EntryItem.css";

const EntryItem = props => (
  <div className="entry-item">
    <div className="ui card">
      <div className="content">
        <div className="header">
          {props.entry.nick}: {props.entry.score}
        </div>
      </div>
      {/* <div className="extra content">
        <button
          className="ui button"
          onClick={() => props.deleteEntry(props.entry._id)}
        >
          Delete
        </button>
      </div> */}
    </div>
  </div>
);

export default EntryItem;
