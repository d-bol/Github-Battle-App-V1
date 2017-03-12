var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

//stateless function as we are not referencing state.
var Prompt = function(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form>
          <div className = "form-group">
            <input type="text" placeholder="Github Username" className="form-control" onChange={props.onUpdateUser} value={props.username}/>
          </div>
          <div className="col-sm-4 form-group col-sm-offset-4">
            <button type="submit" className="btn btn-block btn-success" onClick={props.onSubmitUser}>
              Go!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Prompt.PropTypes = {
    onSubmitUser: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = Prompt;
