import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Header, Body } from './';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return { };
// }

// export default connect(mapStateToProps)(App);

export default App;
