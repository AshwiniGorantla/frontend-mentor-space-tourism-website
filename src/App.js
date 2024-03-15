import Route from "./components/Route";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Home from './pages/Home';
import classNames from 'classnames';


function App() {
    const classes = classNames(
        'main'
      );
  return (
    <div>
        <div className="main-route">
            <Route path="/destination">
                <Destination />
            </Route>
            <Route path="/home">
                <Home />
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
