import React from 'react';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="searchbox">
        <div className="container blacker">
          <h1>CONTENTS</h1>
        </div>
        <div className="container">
          <h2>MOVIES</h2>
          <div className="list-movies">
            <div className="col">col</div>
            <div className="col">col</div>
            <div className="col">col</div>
            <div className="col">col</div>
          </div>
          <h2>TV SHOWS</h2>
          <div className="list-tv">
            <div className="col-6"></div>
            <div className="col-6"></div>
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
          <h2>CASTS</h2>
          <div className="list-casts">
            <div className="col-6"></div>
            <div className="col-6"></div>
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default SearchBox;