var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');


// var USER_DATA = {
//   name: 'Tyler McGinnis',
//   username: 'tylermcginnis',
//   image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
// }
//
// var Image = React.createClass({
//   render: function() {
//     return (
//       <img src={this.props.image}>
//       </img>
//     );
//   }
// });
//
// var Name = React.createClass({
//   render: function(){
//     return(
//       <h2>{this.props.name}</h2>
//     )
//   }
// })
//
// var Username = React.createClass({
//   render: function(){
//     return(
//       <h3>{this.props.username}</h3>
//     )
//   }
// })
//
// var Container = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <Name name={this.props.user.name}/>
//         <Username username={this.props.user.username}/>
//         <Image image={this.props.user.image}/>
//       </div>
//     )
//   }
// })

ReactDOM.render(
  routes,
  document.getElementById('app')
);
