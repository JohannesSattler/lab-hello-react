import logo from './logo.svg';
import './App.css';

function NavBar() {
  return (
    <div className="dark">
      <img src="./images/ironhack-logo-xs-dark.png" alt="" width="50"></img>
      <img src="./images/menu-top-xs-dark.png" alt="" width="50"></img>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Say hello to React.js</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsam rerum molestiae modi minima. Alias eveniet et modi molestiae fugiat atque, eligendi consequuntur provident, asperiores soluta, magnam earum debitis a!</p>
      <button>Awesome!</button>
    </div>
  )
}

function Content() {
  return (
    <div>
      <img src="./images/icon1.png" alt="" />
      <h2>Declarative</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, repellendus!</p>

      <img src="./images/icon2.png" alt="" />
      <h2>Components</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, repellendus!</p>

      <img src="./images/icon3.png" alt="" />
      <h2>Single-Way</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, repellendus!</p>

      <img src="./images/icon4.png" alt="" />
      <h2>JSX</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, repellendus!</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
