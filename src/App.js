import Route from "./components/Route";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Home from './pages/Home';
import Topbar from "./components/Topbar";
import NavigationContext from './context/navigation';
import { useContext } from 'react';
import classNames from 'classnames';

function App() {
    const { currentPath } = useContext(NavigationContext);
    const classes = classNames(
        'main',
        currentPath === "/destination" && 'destination-background',
        currentPath === "/crew" && 'crew-background',
        currentPath === "/technology" && 'technology-background'
    )

    return (
        <div className={classes}>
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
