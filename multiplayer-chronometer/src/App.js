import './styles/main.css'
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <div className="navbar">
          <Link to=''><button className="navbar-element home">Home</button></Link>
          <Link to='first'><button className="navbar-element">First</button></Link>
          <Link to='second'><button className="navbar-element">Second</button></Link>
          <Link to='third'><button className="navbar-element">Third</button></Link>
        </div>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
