var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');


var ConfirmBattle = function(props){
  return(
    props.isLoading === true ?
      <Loading speed={800} text={"Waiting"}/> :
      <MainContainer>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playerInfo[0]}/>
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playerInfo[1]}/>
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button type="button" className="btn btn-success btn-lrg" onClick={props.handleInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className="col-sm-12" style={styles.space}>
            <Link to='/playerOne'>
              <button type="button" className="btn btn-danger btn-lrg">
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
  )
}

ConfirmBattle.PropTypes ={
  isLoading: PropTypes.string.isRequired,
  playerInfo: PropTypes.array.isRequired,
  handleInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
