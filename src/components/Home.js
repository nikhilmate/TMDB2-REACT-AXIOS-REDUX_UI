import React from 'React';
//import { NavLink } from "react-router-dom";
import Header from './Header';
import HomeBody from './HomeBody';
import SearchBox from './SearchBox';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">          
        <Header />
        <HomeBody />
        <SearchBox />
      </div>
    );
  }
}

export default Home;