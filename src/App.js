import './stylesheets/components.scss';
import React from 'react';
import jQuery from 'jquery';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
<div className="container-fluid">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <div className="navbar-brand" href="#">Inbox</div>
  </div>

  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
    </ul>
  </div>
</div>
</nav>
        {this.props.children}
      </div>
      );
  }
}

export default App;
