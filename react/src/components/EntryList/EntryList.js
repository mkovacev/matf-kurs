import React from "react";

import "./EntryList.css";
import EntryItem from "../EntryItem";
import entriesApi from "../../apis/entries";

class EntryList extends React.Component {
  state = { entries: [] };

  componentDidMount() {
    this.fetchEntries();
  }

  render() {
    return this.state.entries ? this.renderList() : this.renderLoader();
  }

  renderList = () => (
    <div className="entry-list">
      {this.state.entries.map(entry => (
        <EntryItem
          key={entry._id}
          entry={entry}
          deleteEntry={this.deleteEntry}
        />
      ))}
    </div>
  );

  renderLoader = () => <div>No entries yet...</div>;

  fetchEntries() {
    entriesApi.getEntries().then(entries => this.setState({ entries }));
  }

  deleteEntry = nick => {
    console.log(nick)
    entriesApi.deleteEntry(nick).then(() => this.fetchEntries());
  };
}

export default EntryList;
