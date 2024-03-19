import Route from "./components/Route";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Home from './pages/Home';
import Topbar from "./components/Topbar";


function App() {
  return (
    <div className="main">
        <div className="banner">
            <img className="logo" src={require('./images/shared/logo.jpg')} alt="logo"/>
            <div className="line"></div>
            <Topbar />
        </div>
        
        <div className="main-route">
            <Route path="/">
                <Home />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/destination">
                <Destination />
            </Route>
            <Route path="/crew">
                <Crew />
            </Route>
            <Route path="/technology">
                <Technology />
            </Route>
        </div>
    </div>
  );
}

export default App;
