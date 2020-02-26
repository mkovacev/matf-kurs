import axios from "axios";

class EntriesApi {
  config = {
    baseURL: "http://localhost",
    port: 8787
  };
  constructor() {
    this.httpClient = axios.create({
      baseURL: `${this.config.baseURL}:${this.config.port}`
    });
  }

  getEntries() {
    return this.httpClient
      .get("/users")
      .then(response =>
        response.data.map(item => this._mapResponseToEntry(item))
      );
  }

  getEntry(nick) {
    return this.httpClient
      .get(`/users/${nick}`)
      .then(response => this._mapResponseToEntry(response.data));
  }

  deleteEntry(_id) {
    return this.httpClient.delete(`/users/${_id}`);
  }

  _mapResponseToEntry(response) {
    return {
      _id: response._id,
      nick: response.nick,
      score: response.score,
    };
  }
}

export default new EntriesApi();