'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

class App extends React.Component{
  state = {
    name:'Ryu',
    age: 30
  }

  //at least one function
  render(){
    return(
      <div className="app-content">
        <h1>Fancy yoooooooo</h1>
        <p>My name is {this.state.name} and I am {this.state.age} </p>
      </div>
    );

  }
}

//JSX format.
ReactDOM.render(<App />, document.querySelector('#app'));
