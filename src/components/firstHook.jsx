import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react'

export function FirstHook() {

    const [data, setData] = useState(0);
    const latest = useRef(data);

    function reducer(state, action) {
        switch (action.type) {
            case 'ADD':
                console.log('got the add');
                return state + 1;
                break;

            default:
                break;
        }
    }
    const initialState = 0;
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        //   latest.current=data;
        // // manage the same state 
        // console.log(latest.current);

        // return ()=>{
        //    let mydata= data===10?setData(0):'';


        // }  
        let id = setInterval(() => {
            dispatch({ type: 'ADD' });
        }, 1000);
        return () => {
            clearInterval(id);
        }
    }, [dispatch])


    function handleAfter() {
        setTimeout(() => {
            console.log('current data is ', data);
            alert('data changing');
            setData(5);

        }, 2000);
    }

    function handleRender() {
        // for the same data useEffect no render again 
        setData(4);
    }

    return (<div>
        <h1>This is Hooks example</h1>
        <div>now Data is {data}</div>
        <div>counte with redux is {state}</div>
        <button onClick={() => (setData(data + 1))}>SetState</button>

        <button onClick={handleAfter}>After State</button>

        <button onClick={handleRender}>Check Render</button>
    </div>
    );
}