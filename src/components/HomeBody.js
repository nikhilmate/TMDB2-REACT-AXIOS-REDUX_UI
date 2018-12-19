import React from 'react';
import { Button } from 'reactstrap';
class HomeBody extends React.Component {
  render() {
    return (
      <div className="homebody">
        <div className="jumbotron">
          <div className="container">
            <div className="col-5">
              <h1 class="title">THE TMDB2</h1>
              <h3 class="intro">Welcome to the <span className="content-changer">movie</span> search portal!</h3>
              <p class="label">Search movie by <span class="keyload">GENRE</span></p>
            </div>
            <div className="col-7">
              <img src="images/home.jpg" className="tmbi-pic"/>
            </div>
          </div>

          <div className="container remover">
            <div className="col-sm-3">
              <Button>BY RATING</Button>
            </div>
            <div className="col-sm-3">
              <Button>BY POPULARITY</Button>
            </div>
            <div className="col-sm-3">
              <Button>BY GENRE</Button>
            </div>
            <div className="col-sm-3">
              <Button>BY YEAR</Button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HomeBody;