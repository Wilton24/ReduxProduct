import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};



const useStore = () => {
    const [state, setState] = useState(globalState);

    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners = listeners.filter(li => li !== setState);
        };
    }, [setState]);

    // const dispatch = (actionIdentifier, payload) => {
    //     const newState = actions[actionIdentifier](globalState, payload);
    //     globalState = { ...globalState, ...newState };
    //     for (const listener of listeners) {
    //         listener(globalState);
    //     }
    // };
}

