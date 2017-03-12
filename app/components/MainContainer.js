var React = require('react');
var styles = require('../styles');

function MainContainer(props){
  return(
    <div className="col-sm-12 jumbotron text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;
