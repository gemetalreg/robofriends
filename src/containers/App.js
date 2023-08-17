import React, {useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../features/search/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import { selectSearchField } from "../features/search/searchSlice";
import { selectRobotsStatus, selectAllRobots, fetchRobots } from "../features/robots/robotsSlice";
import { useSelector, useDispatch } from "react-redux";
import './App.css';

const App = () => {

    const robots = useSelector(selectAllRobots);
    const robotsStatus = useSelector(selectRobotsStatus);
    const searchfield = useSelector(selectSearchField);
    const dispatch = useDispatch();

    useEffect(() => {
        if (robotsStatus === 'idle') {
            dispatch(fetchRobots());
        }
    }, [robotsStatus, dispatch])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robotsStatus === 'loading') {
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