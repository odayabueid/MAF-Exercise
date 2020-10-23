
import React from 'react';
import { BrowserRouter, Router } from "react-router-dom";
import { Route } from 'react-router-dom';
import SideMenu from './components/SideMenu'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={SideMenu} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App