import React, {useState, useCallback} from "react";
import MyChildComponent from "./MyChildComponent";

function MyParentComponent() {
    const[parentStateTracker, setParentState] = useState(0);
    const[childStateTracker, setChildState] = useState(2);
    const changeStateOfParent = () => setParentState(parentStateTracker + 1);
    const changeChildState = () => setChildState(childStateTracker + 1);
    const memoChangeChildStateFunction = useCallback(()=>changeChildState(), [childStateTracker]);
    return (
        <div>
            <h3>{parentStateTracker}</h3>
            <button onClick={changeStateOfParent}>Change State Of Parent</button> 
            <br/>
            <MyChildComponent changeChildStateFunction={memoChangeChildStateFunction} childState={childStateTracker}/>
        </div>
    );
}

export default MyParentComponent;