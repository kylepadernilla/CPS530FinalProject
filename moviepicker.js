class Application extends React.Component {
  render() {
    return <>
    <Jumbotron/>
    <div className="container">
      <Movies/>
      <FlaskLink/>
      <hr/>
    </div>
    </>;
  }
}

const heading_style = {
  fontSize:'20px',
  fontWeight:'300',
  color:'white'
};
const imgSize = {
  height:'100%',
  widtht: '100%',
  borderWidth: '10px',
  borderColor:'black'
};

const blackFont = {
  color: 'black',
  textAlign: 'left'
};

const modalParagraph = {
  color: 'black'
}

const modalStyles = {
  padding: '100px'
}

const jumboColor = {
backgroundColor:'rgb(106, 90, 205)'
}

const Jumbotron = () =>
<>
    <h2 style={heading_style}>Page created with React Components</h2>
    <br></br>
    <div className="jumbotron jumbotron-fluid text-white" style={jumboColor}>
      <div className="container text-sm-center pt-5">
        <h1 className="display-2">Cineflex Movies</h1>
        <p className="lead">Movies to die for right now.</p>
        <div className="btn-group mt-4" role="group" aria-label="Callout Buttons">
          <button type="button" className="btn btn-primary btn-lg">Watch today!</button>
        </div>
      </div>
    </div>
</>
const Movies = () =>
    <>
    <h1 id="toys" className="display-4 my-4 text-center">Movies Featured:</h1>
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <div className="card mb-3">
          <img className="card-img-top" src="images/avengers.jpg" style={imgSize}/>
          <div className="card-body">
            <h4 className="card-title text-center" style={blackFont}>Avengers: Endgame</h4>
            <p className="card-text" style={blackFont}>
          After Thanos, an intergalactic warlord, disintegrates half of the universe,
          the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.
            </p>
            <Modal/ >
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card mb-3">
          <img className="card-img-top" src="images/parasite.jpg" style={imgSize}/>
          <div className="card-body">
            <h4 className="card-title text-center" style={blackFont}>Parasite</h4>
            <p className="card-text" style={blackFont}>
              Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.
            </p>
              <Modal/ >
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card mb-3">
          <img className="card-img-top" src="images/sonic.jpg"/>
          <div className="card-body">
            <h4 className="card-title text-center" style={blackFont}>Sonic: The Hedge Hog</h4>
            <p className="card-text" style={blackFont}>
              Sonic tries to navigate the complexities of life on Earth with his newfound best friend -- a human named Tom Wachowski.
              <br></br>
              <br></br>
               <Modal/ >
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card mb-3">
          <img className="card-img-top" src="images/starwars.jpg"/>
          <div className="card-body">
            <h4 className="card-title text-center" style={blackFont}>Star Wars: The Rise of Skywalker</h4>
            <p className="card-text" style={blackFont}>
              The surviving Resistance faces the First Order once more as Rey, Finn and Poe Dameron's journey continues.
              With the power and knowledge of generations behind them, the final battle commences.
            </p>
            <Modal/ >
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card mb-3">
          <img className="card-img-top" src="images/junglecruise.jpg"/>
          <div className="card-body">
            <h4 className="card-title text-center" style={blackFont}>Jungle Cruise</h4>
            <p className="card-text" style={blackFont}>
              Set during the early 20th century, a riverboat captain named Frank takes a scientist and her brother on a mission into a
              jungle to find the Tree of Life which is believed to possess healing powers.
               All the while, the trio must fight against dangerous wild animals and a competing German expedition.
            </p>
            <Modal/ >
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card mb-3">
          <img className="card-img-top" src="images/joker.jpg"/>
          <div className="card-body">
            <h4 className="card-title text-center" style={blackFont}>Joker</h4>
            <p className="card-text" style={blackFont}>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day
              job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
            </p>
            <Modal/ >
          </div>
        </div>
      </div>
    </div>
    </>;

const FlaskLink = () =>
  <>
  <br></br>
  <div>
  <a href="./installation.html">Flask Demo</a>
  </div>
  </>;

const Modal = () =>
<>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
Summary
</button>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle" style={blackFont}>Summary</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <p  style={blackFont} className="p-3">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s.
      </p>
    </div>
  </div>
</div>
</div>
</>;
ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);
