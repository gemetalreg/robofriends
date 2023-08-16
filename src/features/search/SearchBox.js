import React from "react";
import { useDispatch } from "react-redux";
import {setsearchfield} from "./searchSlice"

const SearchBox = () => {
    const dispatch = useDispatch();

    return (
    <div className="pa2">
        <input 
        className="pa3 ba b--green bg-lightest-blue"
        type='search' placeholder='search robots...'
        onChange={(event) => dispatch(setsearchfield(event.target.value))} />
    </div>
    );
}


export default SearchBox;