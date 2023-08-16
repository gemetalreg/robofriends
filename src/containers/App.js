import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../features/search/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import { selectSearchField } from "../features/search/searchSlice";
import { useSelector } from "react-redux";
import './App.css';

const App = () => {

    const [robots, setRobots] = useState([]);
    const searchfield = useSelector(selectSearchField);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, [])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length) {
        return <h1 className="tc">Loading</h1>;
    }

    return (
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;