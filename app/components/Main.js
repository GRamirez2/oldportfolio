// Include React
var React = require("react");

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>What's up George???</strong></h2>
          <p><em>Testing Routes</em></p>
          <hr />
          <p>
            <a href="#/Child1" className="btn btn-primary btn-lg">Show Child #1</a>
            <a href="#/Child2" className="btn btn-primary btn-lg">Show Child #2</a>
          </p>
        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

      </div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Main;
